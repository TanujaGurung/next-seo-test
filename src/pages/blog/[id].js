import { NextSeo } from "next-seo";


export const getToken = async () => {
  const tokenRes = await fetch(
    "https://drwhm1ofhh.execute-api.ap-south-1.amazonaws.com/qa/api/v1/auth/guest",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mode: "no-cors",
        ip: "1696313264460",
        os: "Windows",
        version: "1.1",
      }),
    }
  );
  const jsonToken = await tokenRes.json();
  const finalToken = await jsonToken?.data?.guestToken;
  return finalToken
}

export const getPreview = async (id, finalToken) => {
  const res = await fetch(
    `https://3mxtu0s5yl.execute-api.ap-south-1.amazonaws.com/qa/api/v1/web/hoote/${id}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${finalToken}` },
    }
  );
  return res;
};

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