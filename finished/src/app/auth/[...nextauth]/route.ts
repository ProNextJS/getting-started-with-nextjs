import NextAuth from "next-auth";
import { NextAuthConfig } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const authOptions = {
  callbacks: {
    async signIn({ profile }: { profile: { login: string } }) {
      return profile.login === "jherr";
    },
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  basePath: "/auth",
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);

export const { GET, POST } = handlers;
