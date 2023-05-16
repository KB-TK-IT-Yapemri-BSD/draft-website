import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
	// Configure one or more authentication providers
	secret: process.env.AUTH_SECRET,

	providers: [
		CredentialsProvider({
			name: 'Credentials',

			credentials: {
				email: { label: 'email', type: 'text' },
				password: { label: 'password', type: 'password' },
			},

			async authorize(credentials, req) {
				const { email, password } = credentials as any;

				const res = await fetch('http://localhost:4000/v1/auth/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						email,
						password,
					}),
				});

				const user = await res.json();

				if (res.ok && user) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],

	session: {
		strategy: 'jwt',
	},

	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},
		async session({ session, token, user }) {
			session.user = token as any;
			return session;
		},
	},

	pages: {
		signIn: '/login',
	},
});
