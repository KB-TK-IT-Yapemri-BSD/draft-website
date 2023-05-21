'use client';

import { ReactNode } from 'react';
import { SessionProvider, useSession } from 'next-auth/react';

interface IProps {
	children: ReactNode;
	session?: any;
}

export default function Providers({ children, session }: IProps) {
	return <SessionProvider session={session}>{children}</SessionProvider>;
}
