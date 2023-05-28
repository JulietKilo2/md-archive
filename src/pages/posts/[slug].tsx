import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const index = ({ fileContent }: { fileContent: any }) => {
  return (
    <div className="layout-basics bg-white py-[24px] px-[16px] border border-gray-200 rounded-lg">
      <ReactMarkdown className="prose" rehypePlugins={[rehypeRaw]}>
        {fileContent}
      </ReactMarkdown>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (params) => {
  const slug = params?.params?.slug;
  const filePath = path.join(
    process.cwd(),
    "public",
    "markdowns",
    `${slug}.md`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");

  return {
    props: { fileContent },
  };
};

export default index;
