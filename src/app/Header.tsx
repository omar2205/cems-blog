'use client'

import { Button } from "@/components/ui/button"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

export default function Header() {
  const { data } = useSession()

  return (
    <div className="bg-neutral-800 w-full h-12">
      <div className="flex p-4 h-full max-w-2xl mx-auto justify-between items-center text-white">
        <h1><Link href="/">MySuperBlog</Link></h1>
        {data ? (<div>
          {data.user.name + ' '}
          <Button onClick={() => signOut()}>Logout</Button>
        </div>
        ) : <Button onClick={() => signIn()}>Login</Button>}
      </div>
    </div >
  )
}
