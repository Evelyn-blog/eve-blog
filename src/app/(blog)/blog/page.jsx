import { getData } from "@/app/api/util/actions";
import { BlogCardsClient } from "@/components/custom/blogsClient";

export const metadata = {
  title: "Evelyn Hefele posts",
  description: "Posts by Evelyn Hefele",
};

export default async function BlogCardsServerSide() {
  const { posts } = await getData("posts");

  return <BlogCardsClient posts={posts} />;
}
