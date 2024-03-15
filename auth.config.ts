import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"

import {LoginSchema} from "@/schemas";
import {getUserByEmail} from "@/data/user";
import bcrypt from "bcryptjs"
export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedCredentials = await LoginSchema.safeParseAsync(credentials)
                if (validatedCredentials.success) {
                    const {email, password} = validatedCredentials.data;


                    const user = await getUserByEmail(email)
                    if(!user || !user.password) return null

                    const isValidPassword = await bcrypt.compare(
                        password,
                        user.password
                    )
                    if (!isValidPassword) return null


                    if (isValidPassword) return user;
                }
                return null;
            }
        })
    ],

} satisfies NextAuthConfig