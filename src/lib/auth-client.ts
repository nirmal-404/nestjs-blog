import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: process.env.BASE_URL
})

export const { signUp, signIn, signOut, useSession} = authClient;