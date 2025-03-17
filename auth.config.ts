import type { NextAuthConfig } from 'next-auth';

export const authConfig: NextAuthConfig = {
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/board');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/board', nextUrl));
      }
      return true;
    },
    jwt({ token, user, account }) {
      if (account) {
        return {
          ...token,
          accessToken: account.access_token,
        };
      }
      return token;
    },
    session({ session, token, user }) {
      return { ...session, accessToken: token.accessToken };
    },
  },
  providers: [],
} satisfies NextAuthConfig;
