'use client'

import Link from 'next/link'
import { FormEvent } from 'react'
import { useSession } from 'next-auth/react'
import axios from 'axios'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export const revalidate = 0

export default function Home() {
  const { data: session } = useSession()

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const body = Object.fromEntries(fd)
    const { status } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog`, {
      ...body
    }, {
      headers: {
        'Authorization': `Bearer ${session?.user.accessToken}`
      }
    })

    if (status === 201) location.href = '/'
  }

  return (
    <>
      <main className="h-[5rem] flex flex-col justify-center items-center shadow">
        <h1>New post</h1>
      </main>

      <div className="max-w-2xl mx-auto mt-4 px-4">
        <form className='flex flex-col gap-4 justify-center items-center'
          onSubmit={handleFormSubmit}
        >
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input required name="title" id="title" placeholder="Title" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Textarea required rows={12} name="content" id="content" placeholder="Content" />
          </div>

          <div className="grid w-full max-w-sm items-center gap-3">
            <Button>Create post</Button>
            <Link className='block text-center' href="/">Cancel</Link>
          </div>
        </form>
      </div>
    </>
  )
}
