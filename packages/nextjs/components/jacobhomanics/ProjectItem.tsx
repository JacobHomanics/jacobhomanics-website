"use client";

import Link from "next/link";
import { IconLink } from "./IconLink";
import { EtherscanLogo } from "~~/components/jacobhomanics/EtherscanLogo";
// import { SocialIcon } from "~~/components/jacobhomanics/SocialIcon";
// import { SocialLink } from "~~/components/jacobhomanics/SocialLink";
import github from "~~/public/social-icons/github.png";

type Props = {
  name: string;
  description: string;
  link: string;
  img: any;
  alt?: string;
  githubUrl?: string;
  size?: "sm" | "base" | "lg";
};

// const sizeMap = {
//   sm: 7,
//   base: "w-[75px] lg:w-[275px]",
//   lg: "",
// };

export const ProjectItem = ({
  name,
  description,
  link,
  img,
  alt,
  //size = "base",
  githubUrl,
}: Props) => {
  return (
    <div className="flex bg-secondary p-4 rounded-lg border-2 border-indigo-500 items-center">
      <Link href={link} target="#">
        <div className="w-[100px] h-[100px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.src} alt={alt ?? name} className="rounded-lg hover:brightness-75 w-full h-full" />
        </div>
      </Link>

      <div className="pl-4 w-full">
        <Link href={link} target="#">
          <p className="text-2xl text-blue-600 dark:text-blue-500 hover:underline">{name}</p>
        </Link>
        <div className="p-[2px] bg-black"></div>
        <p>{description}</p>
        <div className="flex space-x-1">
          <IconLink url={link}>
            <img src={img.src} alt={alt ?? name} className="w-7 lg:w-10" />
          </IconLink>
          <div className="w-[40px] h-[40[x]">
            <IconLink url={githubUrl}>
              <img src={github.src} alt={"Github"} className="w-7 lg:w-10" />
            </IconLink>
          </div>

          <IconLink url={githubUrl}>
            <EtherscanLogo className="w-7 h-7 lg:w-10 lg:h-10" />
          </IconLink>
        </div>
      </div>
    </div>
  );
};