import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import { db } from "@/lib/db";
import {getUserByEmail, getUserById} from "@/data/user";
import Error from "next/error";


export const { handlers: {GET, POST}, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    secret: process.env.AUTH_SECRET,
    callbacks: {


        async signIn({user}) {



            const existingUser = await getUserById(user.id);

            return !(!existingUser || !existingUser.emailVerified);




        },
        async session({token, session}) {


          if (token.sub && session.user) {
              session.user.id = token.sub;
          }

          if (token.role && session.user) {
              session.user.role = token.role
          }

            return session;
        },
        async jwt({token}) {
            if (!token.sub) return token

            const user = await getUserById(token?.sub)

            if (!user) return token

            token.role = user.role

            return token;
        }
    },
    ...authConfig,

})