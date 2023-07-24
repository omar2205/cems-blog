export type Post = {
  _id: string
  title: string
  content: string
  author: string | Author
}

export type Author = {
  _id: string
  username: string
  password?: string
}
