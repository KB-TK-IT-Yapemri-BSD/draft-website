import NextAuth from 'next-auth/next';

declare module 'next-auth' {
	interface Session {
		user: {
			token: {
				tokenType: 'Bearer';
				accessToken: string;
				refreshToken: string;
				expiresIn: Date;
			};
			user: {
				id: string;
				email: string;
				role: string;
				biodata_id: {
					address: string;
				};
				biodataType: string;
				createdAt: Date;
			};
		};
	}
}
