"use client";

import type { NextPage } from "next";
import { Projects } from "~~/components/Projects";
import { data } from "~~/components/configs/dao-tooling.config";

const DaoToolingPage: NextPage = () => {
  return <Projects title="DAO Tooling" data={data} />;
};

export default DaoToolingPage;
