import { NextSeo } from "next-seo";

const Blog = ({ resData }) => {
  console.log("resDta", resData);
  return (
    <>
      <NextSeo
        title="Manage SEO in NextJS with Next SEO"
        description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
        canonical="www.example.com/next-seo-blog"
        openGraph={{
          type: "article",
          article: {
            publishedTime: "2022-06-21T23:04:13Z",
            modifiedTime: "2022-01-21T18:04:43Z",
            authors: [
              "https://www.example.com/authors/@firstnameA-lastnameA",
              "https://www.example.com/authors/@firstnameB-lastnameB",
            ],
            tags: ["Tag A", "Tag B", "Tag C"],
          },
          url: "www.example.com/next-seo-blog",
          images: [
            {
              url: resData.image,
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
  const res = await fetch(`https://fakestoreapi.com/products/${ctx.query.id}`);
  const resData = await res.json();
 // const resData = json.data;
  return {
    props: {
      resData,
    },
  };
};
