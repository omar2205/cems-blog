import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { BackendService } from '@/services/Backend'

import PostForm from './Form'
import { redirect } from 'next/navigation'

export const revalidate = 0

export default async function Page({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  const { data: post } = await BackendService.get('/blog/' + params.id)

  if (!session) redirect('/')

  return (
    <>
      <main className="h-[5rem] flex flex-col justify-center items-center shadow">
        <h1>Edit: {post.title}</h1>
      </main>

      <div className="max-w-2xl mx-auto mt-4 px-4">
        <PostForm id={params.id} session={session} post={post} />
      </div>
    </>
  )
}
