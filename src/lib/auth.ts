import { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { BackendService } from '@/services/Backend'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(creds) {
        if (!creds?.username || !creds?.password) return null

        const { data, status } = await BackendService.post('/auth/signin', {
          username: creds?.username,
          password: creds?.password,
        })
        if (status !== 201) return null
        return {
          id: data.userId,
          name: creds?.username,
          accessToken: data.accessToken,
        }
      }
    })
  ],
  jwt: {
    maxAge: 10, // 10mins
  },
  callbacks: {
    async session({ session, token }) {
      // @ts-ignore
      session.user.accessToken = token.accessToken
      return session
    },
    async jwt({ token, user, account }) {
      if (account) {
        // @ts-ignore
        token.accessToken = user.accessToken
      }
      return token
    }
  }
} satisfies AuthOptions


