import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import User from '../../../models/User'
import dbConnect from '../../../lib/dbConnect'

export const authOptions: NextAuthOptions = {
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true
        },
        async session({ session, token, user }) {
            session.user = token.user

            return session
        },
        async jwt({ token, user }) {
            if (user) {
                token.user = user
            }

            return token
        },
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'johnsnow',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                await dbConnect()

                const user = await User.findOne({
                    username: credentials!.username,
                })
                    .select('+password')
                    .exec()

                if (!user) {
                    return null
                }

                const matched = await bcrypt.compare(
                    credentials!.password as string,
                    user!.password!
                )

                if (!matched) {
                    return null
                }

                return user.toObject({
                    transform: (doc, ret) => {
                        delete ret._id
                        delete ret.__v
                        delete ret.id
                        delete ret.password
                        return ret
                    },
                })
            },
        }),
    ],
}

export default NextAuth(authOptions)
