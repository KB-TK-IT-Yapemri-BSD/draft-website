'use client';

import { useSession } from 'next-auth/react';
import NavbarPublic from '../public/NavbarPublic';
import NavbarLoggedIn from '../loggedIn/NavbarLoggedIn';

function Navbar() {
	const { data: session } = useSession();

	if (session?.user) {
		return <NavbarLoggedIn />;
	} else {
		return <NavbarPublic />;
	}
}

export default Navbar;
