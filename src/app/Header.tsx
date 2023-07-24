'use client'

import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import Link from "next/link"

export default function Header() {
  return (
    <div className="bg-neutral-800 w-full h-12">
      <div className="flex py-4 h-full max-w-2xl mx-auto justify-between items-center text-white">
        <h1><Link href="/">MySuperBlog</Link></h1>
        <Button onClick={() => signIn()}>Login</Button>
      </div>
    </div>
  )
}
