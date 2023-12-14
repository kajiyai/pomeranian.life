import { client } from "../src/libs/client";
import Home, { HomeProps } from "../src/app/page";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "column" });

  return {
    props: {
      column: data.contents,
    } as HomeProps,
  };
};

export default Home;