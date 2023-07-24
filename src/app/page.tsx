import { BackendService } from "@/services/Backend"
import { Post } from "@/types/backend"
import Link from "next/link"
import NewPostLink from "./NewPostButton"

export const revalidate = 0

const ErrorGettigPosts = () => <h1>Error getting posts...</h1>

export default async function Home() {
  try {
    const { data: posts, status } = await BackendService.get<Post[]>('/blog')

    if (!posts || status !== 200) return <ErrorGettigPosts />

    return (
      <>
        <main className="h-[7rem] flex flex-col justify-center items-center shadow">
          <h1>Welcome to my Blog</h1>
          <NewPostLink />
        </main>

        <div className="max-w-2xl mx-auto mt-4 px-4">
          <h2>My latest posts</h2>
          <div className="flex flex-col gap-4 mt-4">
            {posts.map((post: any) => {
              return <Link key={post._id}
                className="shadow hover:shadow-md p-4 rounded"
                href={"/post/" + post._id}
              >
                <h3>{post.title}</h3>
              </Link>
            })}
          </div>
        </div>
      </>
    )
  } catch (error) {
    return <ErrorGettigPosts />
  }
}
