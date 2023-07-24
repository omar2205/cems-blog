'use client'

import { useSession } from "next-auth/react"
import Link from "next/link"

export default function NewPostLink() {
  const { data } = useSession()

  if (data) {
    return <Link href="/new">New post</Link>
  }
}

