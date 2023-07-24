import { JWT } from "next-auth/jwt"

declare module 'next-auth' {
  interface Session {
    user: {
      accessToken?: string
      username?: string
    } & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
  }
}
