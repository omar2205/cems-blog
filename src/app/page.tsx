import { Post } from "@/types/backend"

export const revalidate = 0

export default async function Home() {
  const posts = await fetch('http://localhost:3001/blog').then(r => r.json()) as Post[]

  return (
    <>
      <main className="h-[5rem] flex justify-center items-center shadow">
        <h1>Welcome to my Blog</h1>
      </main>

      <div className="max-w-2xl mx-auto mt-4">
        <h2>My latest posts</h2>
        <div className="flex flex-col gap-4 mt-4">
          {posts.map((post: any) => {
            return <a key={post._id}
              className="shadow hover:shadow-md p-4 rounded"
              href={"/post/" + post._id}
            >
              <h3>{post.title}</h3>
            </a>
          })}
        </div>
      </div>
    </>
  )
}
