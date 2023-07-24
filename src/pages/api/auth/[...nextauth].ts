import NextAuth, { AuthOptions } from 'next-auth'
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
      async authorize(creds, req) {
        if (!creds?.username || !creds?.password) return null

        const { data, status } = await BackendService.post('/auth/sigin', {
          username: creds?.username,
          password: creds?.password,
        })
        if (status !== 201) return null
        return {
          id: data.userId,
          username: creds?.username,
          accessToken: data.accessToken,
        }
      }
    })
  ]
} satisfies AuthOptions

export default NextAuth(authOptions)
