"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IconsLinks } from "../icons-links/IconLinks";
import { useWindowSize } from "usehooks-ts";

type Props = {
  name: string;
  description: string;
  url: string;
  img: any;
  links?: ({ url: string; icon: string } | { url: string; icon: ({ className }: { className: string }) => Element })[];
};

export const Project = ({ name, description, img, url, links = [] }: Props) => {
  const [isLineClamped, setIsLineClamped] = useState(true);
  const [isClamped, setIsClamped] = useState(false);
  const descriptionRef = useRef<HTMLDivElement>(null);

  const result = useWindowSize();

  useEffect(() => {
    const element = descriptionRef.current;
    if (element) {
      setIsClamped(element.scrollHeight > element.clientHeight);
    }
  }, [result.width, description]);

  // const finalLinksArr = [{ url: url, icon: img.src }, ...links];
  const finalLinksArr = [...links];

  return (
    <div className="flex bg-primary p-4 rounded-lg border-2 border-primary items-start w-full">
      <Link href={url} target="#" className="w-[50px] h-[50px] flex-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img.src ? img.src : img}
          alt="Hejh"
          className="w-full h-full object-cover rounded-lg hover:brightness-75"
        />
      </Link>
      <div className="flex flex-col pl-6 items-start">
        <Link href={url} target="#">
          <div className="text-lg text-blue-600 dark:text-blue-500 hover:underline">{name}</div>
        </Link>
        <div ref={descriptionRef} className={`${isLineClamped ? "line-clamp-2 break-words text-sm" : "text-sm"}`}>
          {description}
        </div>

        {isClamped && (
          <button
            onClick={() => {
              setIsLineClamped(!isLineClamped);
            }}
            className="hover:underline cursor-pointer mt-2 mb-1 text-sm"
          >
            {isLineClamped ? "Show more" : "Show less"}
          </button>
        )}
        <div className="mt-2 p-1 rounded-lg">
          <IconsLinks iconsLinks={finalLinksArr} size="xs" />
        </div>
      </div>
    </div>
  );
};
