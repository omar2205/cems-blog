'use client'

import { useSession } from "next-auth/react"
import Link from "next/link"

const AddIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>

export default function NewPostLink() {
  const { data } = useSession()

  if (data) {
    return (
      <Link href="/new" className="flex gap-2 mt-2">
        <AddIcon />
        <span>New post</span>
      </Link>
    )
  }
}

