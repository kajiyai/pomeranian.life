import Link from "next/link";
import type { InferGetStaticPropsType, NextPage } from "next";
import { client } from "../libs/client";    // srcから見た絶対パスで指定
import type { Column } from "../types/column";

// microCMSへAPIリクエスト
const Home = async () => {
  const res = await client.get({ endpoint: "column" });

  return (
    <div>
      {res.contents.map((content: Column, index: number) => (
        <div key={index}>
          <h2>{content.title}</h2>
          <p>Updated At: {content.updatedAt}</p>
        </div>
      ))}
    </div>
  );
};
export default Home;
