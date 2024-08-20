import { defineCollection, defineConfig, s } from "velite";

// needed because URL is /blog/slug

const computeSlug = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      date: s.isodate(),
      published: s.boolean().default(true),
      body: s.mdx(),
    })

    .transform(computeSlug),
});

export default defineConfig({
  root: "./src/content",
  output: {
    data: ".velite",
    assets: "./public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
