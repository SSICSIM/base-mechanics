import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        const sitePassword = process.env.SITE_PASSWORD;
        if (sitePassword && credentials.password === sitePassword) {
          return { id: "staff", name: "Crisis Staff" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 365 * 24 * 60 * 60, // 1 year — stays logged in
  },
});
