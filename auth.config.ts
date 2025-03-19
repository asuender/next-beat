import type { NextAuthConfig } from 'next-auth';
import 'next-auth/jwt';
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
    async jwt({ token, account }) {
      if (account) {
        // First-time login, save the `access_token`, its expiry and the `refresh_token`
        return {
          ...token,
          access_token: account.access_token,
          refresh_token: account.refresh_token,
          expires_at: account.expires_at,
        };
      } else if (token.expires_at && Date.now() < token.expires_at * 1000) {
        // Subsequent logins, but the `access_token` is still valid
        return token;
      } else {
        // Subsequent logins, but the `access_token` has expired, try to refresh it
        if (!token.refresh_token) throw new Error('No refresh token found');

        try {
          const response = await fetch(
            'https://accounts.spotify.com/api/token',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: token.refresh_token,
                client_id: process.env.AUTH_SPOTIFY_ID!,
              }),
            }
          );

          const tokensOrError = await response.json();

          if (!response.ok) throw tokensOrError;

          const newTokens = tokensOrError as {
            access_token: string;
            refresh_token: string;
            expires_at: number;
          };

          return {
            ...token,
            ...newTokens,
          };
        } catch (error) {
          console.error('Error refreshing access_token', error);
          token.error = 'RefreshTokenError';
          return token;
        }
      }
    },
    session({ session, token }) {
      return {
        ...session,
        access_token: token.access_token,
        error: token.error as string | undefined,
      };
    },
  },
  providers: [],
} satisfies NextAuthConfig;
