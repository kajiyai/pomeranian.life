import { client } from "../../../libs/client";
import type { Column } from "../../../types/column";

// microCMSへAPIリクエスト
const Home = async ({ params }: { params: { slug: string } }) => {
    const res = await client.get({ endpoint: "column", contentId: params.slug });

    return (
        <>
            <h1>
                {res.title}
            </h1>
            <div>
                <p>作成時刻:{res.createdAt}</p>
                <p>更新時刻:{res.updatedAt}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: res.content }} />
        </>
    );
};
export default Home;
