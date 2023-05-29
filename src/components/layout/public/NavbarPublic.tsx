'use client';

import Link from 'next/link';
import Image from 'next/image';
import NavbarPublicItems from './NavbarPublicItems';
import { MenuSymbol } from '@/components/shared/Icons';
import { useState } from 'react';

function NavbarPublic() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="fixed w-full bg-white shadow-lg z-50">
			<div className="lg:flex justify-between py-6 mx-6 lg:mx-20">
				<div className="flex flex-row relative">
					<div>
						<Image
							src="/logo.png"
							width={53}
							height={53}
							style={{ width: 'auto', height: 'auto' }}
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
					<NavbarPublicItems />

					<Link href="/login">
						<button className="bg-primary hover:bg-secondary hover:text-white rounded-md px-6 my-4 py-2 lg:my-0">
							<p>Masuk</p>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NavbarPublic;
