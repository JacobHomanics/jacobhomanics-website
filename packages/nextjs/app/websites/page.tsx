"use client";

import type { NextPage } from "next";
import { Projects } from "~~/components/portfolio/Projects";
import { data } from "~~/configs/websites.config";

const WebsitesPage: NextPage = () => {
  return <Projects title="Websites" data={data} />;
};

export default WebsitesPage;
