'use client'

import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <div className="bg-neutral-800 w-full h-12">
      <div className="flex py-4 h-full max-w-2xl mx-auto justify-between items-center text-white">
        <h1><a href="/">MySuperBlog</a></h1>
        <Button>Login</Button>
      </div>
    </div>
  )
}
