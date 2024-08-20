"use client";

import moment from "moment";
import { PropsWithChildren } from "react";

const BlogDate = ({ children }: PropsWithChildren) => {
  return <div>{moment("20201029").format()}</div>;
};

export default BlogDate;
