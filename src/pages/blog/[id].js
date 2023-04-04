import { NextSeo } from "next-seo";
import { getToken,getPreview } from "../../utils/callApi";

const Blog = ({ resData }) => {
  const imgUrl =  resData.hoote.files[0].thumbnail
  console.log("imgUrl", imgUrl)
  return (
    <>
      <NextSeo
        title="Manage SEO in NextJS with Next SEO"
        description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
        canonical="www.example.com/next-seo-blog"
        openGraph={{
          url: "www.example.com/next-seo-blog",
          images: [
            {
              url: imgUrl,
            },
          ],
          site_name: "Next Blog",
        }}
      />
      <p>Manage SEO in NextJS with Next SEO - Blog</p>
    </>
  );
};

export default Blog;

export const getServerSideProps = async (ctx) => {
  const finalToken = await getToken();
  const res = await getPreview(ctx.query.id, finalToken);
  const json = await res.json();
  const resData = json.data;
  return {
    props: {
      resData,
    },
  };
};