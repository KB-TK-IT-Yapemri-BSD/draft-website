'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
	ArrowDown,
	MenuSymbol,
	ProfileSymbol,
} from '@/components/shared/Icons';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import NavbarItems from '../NavbarItems';

function NavbarLoggedIn() {
	const [isOpen, setIsOpen] = useState(false);
	const [isProfile, setIsProfile] = useState(true);

	return (
		<div className="fixed w-full bg-white shadow-lg z-50">
			<div className="lg:flex justify-between py-6 mx-6 lg:mx-20">
				<div className="flex flex-row relative">
					<div>
						<Image
							src="/logo.png"
							width={53}
							height={53}
							alt="Logo KB TK IT Yapemri BSD"
						></Image>
					</div>

					<div className="right-0 absolute my-2 lg:hidden">
						<button onClick={() => setIsOpen(!isOpen)}>
							<MenuSymbol />
						</button>
					</div>
				</div>

				<div
					className={`${
						isOpen ? 'block' : 'hidden'
					} lg:flex flex-col bg-white lg:justify-between lg:space-x-4 lg:flex-row`}
				>
					<NavbarItems />

					<Link href="/profile">
						<button className="bg-primary rounded-md px-2 lg:px-4 my-4 py-2 gap-2 inline-flex lg:my-0">
							<ProfileSymbol />
							<p>Suci Mei S.</p>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NavbarLoggedIn;
