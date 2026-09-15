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
  // NEXTAUTH_URL alone does not set Auth.js's trustHost flag (only AUTH_URL /
  // AUTH_TRUST_HOST / VERCEL / CF_PAGES do), so a production build would
  // otherwise reject every request with UntrustedHost. This app is always
  // deployed behind infrastructure we control, so trusting the request host
  // is safe here.
  trustHost: true,
});
