'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Post } from '@/types/backend'
import axios from 'axios'

const backend = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  timeout: 10_000,
})

export default function PostForm(props: { id: string, post: Post, session: any }) {
  const [title, setTitle] = useState(props.post.title)
  const [content, setContent] = useState(props.post.content)
  const [isLoading, setIsLoading] = useState(false)

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const fd = new FormData(e.currentTarget)
    const body = Object.fromEntries(fd)
    const { status } = await backend.put(`/blog/${props.id}`, {
      ...body
    }, {
      headers: {
        'Authorization': `Bearer ${props.session?.user.accessToken}`
      }
    })

    if (status === 200) location.href = '/'
    setIsLoading(false)
  }

  return <form className='flex flex-col gap-4 justify-center items-center'
    onSubmit={handleFormSubmit}
  >
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input required name="title" id="title" placeholder="Title"
         value={title}
         onChange={e => setTitle(e.currentTarget.value)}
      />
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Textarea required rows={12} name="content" id="content" placeholder="Content"
         value={content}
         onChange={e => setContent(e.currentTarget.value)}
      />
    </div>

    <div className="grid w-full max-w-sm items-center gap-3">
      <Button disabled={isLoading}>Save post</Button>
      <Link className='block text-center' href="/">Cancel</Link>
    </div>
  </form>
}
