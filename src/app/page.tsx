import Link from "next/link";
import { client } from "../libs/client";    // srcから見た絶対パスで指定
import type { Column } from "../types/column";

// microCMSへAPIリクエスト
const Home = async () => {
  const res = await client.get({ endpoint: "column" });

  return (
    <div>
      {res.contents.map((content: Column, index: number) => (
        <div key={index}>
          <p>Updated At: {content.updatedAt}</p>
          <Link href={`column/${content.id}`}>{content.title}</Link>
        </div>
      ))}
    </div>
  );
};
export default Home;
