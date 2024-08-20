import { MDXContent } from "@/mdx-components";
import { notFound } from "next/navigation";
import { posts } from "~/velite";

import moment from "moment";
import FadeInContainer from "@/app/components/framer";

interface BlogPostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: BlogPostProps["params"]) {
  const slug = params?.slug?.join("/");
  return posts.find((post) => post.slugAsParams === slug);
}

export async function generateStaticParams(): Promise<
  BlogPostProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

const BlogPage = async ({ params }: BlogPostProps) => {
  const post = await getPostFromParams(params);
  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="prose prose-sm prose-invert">
      <span className="text-neutral-400">
        Published on {moment(post.date).format("MMMM Do, YYYY")} (
        {moment(post.date).fromNow()})
      </span>
      <h1 className="mb-1">{post.title}</h1>
      <MDXContent code={post.body} />
    </article>
  );
};
export default BlogPage;
