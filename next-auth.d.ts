
import  { type DefaultSession } from "next-auth";


declare module "next-auth" {
    interface Session {
        user: {
            role: "ADMIN" | "USER"
        } & DefaultSession["user"]
    }
}

declare module "@auth/core/jwt" {
    interface JWT {
        role?: "ADMIN" | "USER"
    }
}