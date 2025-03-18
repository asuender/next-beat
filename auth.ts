import NextAuth from 'next-auth';
import Spotify from 'next-auth/providers/spotify';
import { authConfig } from './auth.config';

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [Spotify({
    authorization: {
      url: "https://accounts.spotify.com/authorize",
      params: {
        scope: 'user-read-email user-top-read user-library-read user-read-playback-position',
      },
    },
  })],
});
