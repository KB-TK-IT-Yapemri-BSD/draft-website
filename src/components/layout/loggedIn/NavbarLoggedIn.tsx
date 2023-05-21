'use client';

import Link from 'next/link';
import Image from 'next/image';
import NavbarItemsLoggedIn from './NavbarItemsLoggedIn';
import { MenuSymbol, ProfileSymbol } from '@/components/shared/Icons';
import { Fragment, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { Menu, Transition } from '@headlessui/react';

function NavbarLoggedIn() {
	const { data: session } = useSession();

	const [isOpen, setIsOpen] = useState(false);

	const logout = async () => {
		await signOut({
			redirect: true,
			callbackUrl: '/beranda',
		});
	};

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
					<NavbarItemsLoggedIn />

					<Menu as="div" className="hidden lg:block relative">
						<Menu.Button>
							<button className="bg-primary rounded-md px-4 my-4 py-2 gap-2 inline-flex lg:my-0">
								<ProfileSymbol />
							</button>
						</Menu.Button>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							{session?.user.user.role === 'parents' ? (
								<Menu.Items
									as="div"
									className="bg-white absolute right-0 w-auto rounded-md p-3 border my-2 divide-y divide-grey shadow-lg"
								>
									<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
										<Menu.Item>
											<Link href="/profile/data-diri">
												<p>Data Diri</p>
											</Link>
										</Menu.Item>
									</div>
									<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
										<Menu.Item>
											<Link href="/profile/data-wali">
												<p>Data Wali</p>
											</Link>
										</Menu.Item>
									</div>
									<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
										<Menu.Item>
											<Link href="/profile/info-akun">
												<p>Info Akun</p>
											</Link>
										</Menu.Item>
									</div>
									<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
										<Menu.Item>
											<Link href="/profile/keuangan">
												<p>Keuangan</p>
											</Link>
										</Menu.Item>
									</div>
									<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
										<Menu.Item>
											<button
												onClick={logout}
												className="w-full text-left"
											>
												<p>Logout</p>
											</button>
										</Menu.Item>
									</div>
								</Menu.Items>
							) : session?.user.user.role === 'principal' ? (
								<Menu.Items
									as="div"
									className="bg-white absolute right-0 w-32 rounded-md p-3 border my-2 divide-y divide-grey shadow-lg"
								>
									<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
										<Menu.Item>
											<Link href="/profile/data-diri">
												<p>Data Diri</p>
											</Link>
										</Menu.Item>
									</div>
									<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
										<Menu.Item>
											<Link href="/profile/info-akun">
												<p>Info Akun</p>
											</Link>
										</Menu.Item>
									</div>
									<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
										<Menu.Item>
											<button
												onClick={logout}
												className="w-full text-left"
											>
												<p>Logout</p>
											</button>
										</Menu.Item>
									</div>
								</Menu.Items>
							) : session?.user.user.role === 'teachers' ? (
								<Menu.Items
									as="div"
									className="bg-white absolute right-0 w-32 rounded-md p-3 border my-2 divide-y divide-grey shadow-lg"
								>
									<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
										<Menu.Item>
											<Link href="/profile/data-diri">
												<p>Data Diri</p>
											</Link>
										</Menu.Item>
									</div>
									<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
										<Menu.Item>
											<Link href="/profile/info-akun">
												<p>Info Akun</p>
											</Link>
										</Menu.Item>
									</div>
									<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
										<Menu.Item>
											<Link href="/profile/data-murid">
												<p>Data Murid</p>
											</Link>
										</Menu.Item>
									</div>
									<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
										<Menu.Item>
											<button
												onClick={logout}
												className="w-full text-left"
											>
												<p>Logout</p>
											</button>
										</Menu.Item>
									</div>
								</Menu.Items>
							) : (
								<Menu.Items
									as="div"
									className="bg-white absolute right-0 w-40 rounded-md p-3 border my-2 divide-y divide-grey shadow-lg"
								>
									<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
										<Menu.Item>
											<Link href="/profile/data-diri">
												<p>Data Diri</p>
											</Link>
										</Menu.Item>
									</div>
									<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
										<Menu.Item>
											<Link href="/profile/info-akun">
												<p>Info Akun</p>
											</Link>
										</Menu.Item>
									</div>
									<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
										<Menu.Item>
											<Link href="/profile/data-murid">
												<p>Data Murid</p>
											</Link>
										</Menu.Item>
									</div>
									<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
										<Menu.Item>
											<Link href="/profile/data-staff">
												<p>Data Staff</p>
											</Link>
										</Menu.Item>
									</div>
									<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
										<Menu.Item>
											<Link href="/profile/data-akun">
												<p>Data Akun</p>
											</Link>
										</Menu.Item>
									</div>
									<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
										<Menu.Item>
											<Link href="/profile/info-akun">
												<p>Keuangan</p>
											</Link>
										</Menu.Item>
									</div>
									<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
										<Menu.Item>
											<button
												onClick={logout}
												className="w-full text-left"
											>
												<p>Logout</p>
											</button>
										</Menu.Item>
									</div>
								</Menu.Items>
							)}
						</Transition>
					</Menu>
				</div>
			</div>
		</div>
	);
}

export default NavbarLoggedIn;
