'use client';

import Link from 'next/link';
import { ArrowDown } from '@/components/shared/Icons';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

function NavbarItems() {
	const [isOpen, setIsOpen] = useState(false);
	const [isTK, setIsTK] = useState(true);
	const [isPR, setIsPR] = useState(true);
	const [isBT, setIsBT] = useState(true);

	return (
		<div className="flex flex-col my-4 lg:my-0 lg:mx-3 lg:flex-row lg:space-x-2">
			<Link href="/beranda" onClick={() => setIsOpen(false)}>
				<p className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
					Beranda
				</p>
			</Link>

			<div className="lg:hidden">
				<button
					onClick={() => setIsTK(!isTK)}
					className="flex hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2"
				>
					<p>Tentang Kami</p>
					<ArrowDown />
				</button>

				<div
					className={`${isTK ? 'hidden' : 'block'} px-2 py-2 text-sm`}
					onClick={() => setIsOpen(false)}
				>
					<Link href="/tentang-kami/sejarah-singkat">
						<p className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
							Sejarah Singkat
						</p>
					</Link>
					<Link href="/tentang-kami/visi-misi">
						<p className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
							Visi dan Misi
						</p>
					</Link>
					<Link href="/tentang-kami/struktur-organisasi">
						<p className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
							Struktur Organisasi
						</p>
					</Link>
					<Link href="/tentang-kami/fasilitas-sekolah">
						<p className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
							Fasilitas Sekolah
						</p>
					</Link>
				</div>
			</div>
			<Menu as="div" className="hidden lg:block relative">
				<Menu.Button className="flex hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
					<p>Tentang Kami</p>
					<ArrowDown />
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
					<Menu.Items>
						<div className="bg-white absolute rounded-md p-3 w-60 border my-2 origin-top-right divide-y divide-grey shadow-lg">
							<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
								<Menu.Item>
									<Link href="/tentang-kami/sejarah-singkat">
										<p>Sejarah Singkat</p>
									</Link>
								</Menu.Item>
							</div>
							<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
								<Menu.Item>
									<Link href="/tentang-kami/visi-misi">
										<p>Visi dan Misi</p>
									</Link>
								</Menu.Item>
							</div>
							<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
								<Menu.Item>
									<Link href="/tentang-kami/struktur-organisasi">
										<p>Struktur Organisasi</p>
									</Link>
								</Menu.Item>
							</div>
							<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
								<Menu.Item>
									<Link href="/tentang-kami/fasilitas-sekolah">
										<p>Fasilitas Sekolah</p>
									</Link>
								</Menu.Item>
							</div>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>

			<div className="lg:hidden">
				<button
					onClick={() => setIsPR(!isPR)}
					className="flex hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2"
				>
					<div className="">Program</div>
					<ArrowDown />
				</button>

				<div
					className={`${isPR ? 'hidden' : 'block'} px-2 py-2 text-sm`}
					onClick={() => setIsOpen(false)}
				>
					<Link href="/program/daftar-program">
						<p className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
							Daftar Program
						</p>
					</Link>
					<Link href="/program/galeri-program">
						<p className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
							Galeri Program
						</p>
					</Link>
				</div>
			</div>
			<Menu as="div" className="hidden lg:block relative">
				<Menu.Button className="flex hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
					<p>Program</p>
					<ArrowDown />
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
					<Menu.Items>
						<div className="bg-white absolute rounded-md p-3 w-60 border my-2 origin-top-right divide-y divide-grey shadow-lg">
							<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
								<Menu.Item>
									<Link href="/program/daftar-program">
										<p>Daftar Program</p>
									</Link>
								</Menu.Item>
							</div>
							<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
								<Menu.Item>
									<Link href="/program/galeri-program">
										<p>Galeri Program</p>
									</Link>
								</Menu.Item>
							</div>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>

			<Link href="/pendaftaran" onClick={() => setIsOpen(false)}>
				<p className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
					Pendaftaran
				</p>
			</Link>

			<div className="lg:hidden">
				<button
					onClick={() => setIsBT(!isBT)}
					className="flex hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2"
				>
					<div className="">Berita Terbaru</div>
					<ArrowDown />
				</button>

				<div
					className={`${isBT ? 'hidden' : 'block'} px-2 py-2 text-sm`}
					onClick={() => setIsOpen(false)}
				>
					<Link href="/berita-terbaru/berita-sekolah">
						<p className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
							Berita Sekolah
						</p>
					</Link>
				</div>
			</div>
			<Menu as="div" className="hidden lg:block relative">
				<Menu.Button className="flex hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
					<p>Berita Terbaru</p>
					<ArrowDown />
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
					<Menu.Items>
						<div className="bg-white absolute rounded-md p-3 w-60 border my-2 origin-top-right divide-y divide-grey shadow-lg">
							<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
								<Menu.Item>
									<Link href="/berita-terbaru/berita-sekolah">
										<p>Berita Sekolah</p>
									</Link>
								</Menu.Item>
							</div>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>

			<Link href="/pencarian" onClick={() => setIsOpen(false)}>
				<p className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
					Pencarian
				</p>
			</Link>

			{/**
                <label className="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <MagnifyingGlass />
                    </span>
                    <input
                        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 
                        rounded-md py-2 pl-8 shadow-sm focus:outline-none focus:border-secondary focus:ring-secondary focus:ring-1 sm:text-sm"
                        placeholder="Pencarian..."
                        type="text"
                        name="search"
                    />
                </label>
			*/}
		</div>
	);
}

export default NavbarItems;