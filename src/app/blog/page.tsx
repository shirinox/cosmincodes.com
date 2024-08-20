import moment from "moment";
import Link from "next/link";
import { posts } from "~/velite";

const BlogsPage = () => {
  return (
    <div className="space-y-4">
      {posts.map((post) => {
        return (
          <div key={post.slug}>
            <Link href={post.slug}>
              <h2 className="text-xl font-normal">{post.title}</h2>
              <span className="text-sm font-light text-neutral-400">
                {moment(post.date).fromNow()}
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default BlogsPage;
