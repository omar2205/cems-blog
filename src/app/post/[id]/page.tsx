import { BackendService } from "@/services/Backend"
import { Author, Post } from "@/types/backend"

export default async function Page({ params }: { params: { id: string } }) {
  const { data: post, status } = await BackendService
    .get<Post>(`/blog/${params.id}`)

  if (status !== 200) return <h1>Error getting posts...</h1>

  return (
    <div className="max-w-2xl mx-auto flex flex-col">
      <header className="mt-8">
        <h2 className="font-medium text-3xl">{post.title}</h2>
        <p className="opacity-60">by {(post.author as Author).username}</p>
      </header>
      <div className="my-4">
        {post.content}
      </div>
    </div>
  )
}
