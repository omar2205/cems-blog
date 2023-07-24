'use client'

import { useSession } from "next-auth/react"
import Link from "next/link"

export default function EditPostLink(props: { id: string }) {
  const { data } = useSession()

  if (data) {
    return <Link href={'/edit/' + props.id}>Edit post</Link>
  }
}

