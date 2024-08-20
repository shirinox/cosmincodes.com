import moment from "moment";
import Link from "next/link";
import { posts } from "~/velite";

const BlogsPage = () => {
  return (
    <div className="space-y-4">
      {!!posts.length && (
        <div className="text-center">
          <h2 className="text-3xl">There are no articles currently.</h2>
          <p className="text-neutral-400">Please check back later.</p>
        </div>
      )}
      {posts.map((post) => {
        return (
          post.published && (
            <div key={post.slug}>
              <Link href={post.slug}>
                <h2 className="text-xl font-normal">{post.title}</h2>
                <span className="text-sm font-light text-neutral-400">
                  {moment(post.date).fromNow()}
                </span>
              </Link>
            </div>
          )
        );
      })}
    </div>
  );
};
export default BlogsPage;
