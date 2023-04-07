'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, MagnifyingGlass } from '@/components/shared/Icons';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

function Navbar() {
	return (
		<div className="fixed w-full bg-white shadow-lg z-10">
			<div className="flex justify-between py-5 mx-20">
				<div>
					<Image
						src="/logo.png"
						width={53}
						height={53}
						alt="Logo KB TK IT Yapemri BSD"
					></Image>
				</div>

				<div className="flex justify-between space-x-4">
					<div className="mx-3 flex space-x-2">
						<Link href="/beranda">
							<p className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
								Beranda
							</p>
						</Link>

						<Menu as="div" className="relative">
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

						<Menu as="div" className="relative">
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

						<Link href="/pendaftaran">
							<p className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
								Pendaftaran
							</p>
						</Link>

						<Menu as="div" className="relative">
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
										<div className="hover:bg-body-color hover:bg-opacity-10 hover:w-full hover:rounded-md px-2 py-2">
											<Menu.Item>
												<Link href="/berita-terbaru/agenda-sekolah">
													<p>Agenda Sekolah</p>
												</Link>
											</Menu.Item>
										</div>
									</div>
								</Menu.Items>
							</Transition>
						</Menu>
					</div>
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
					<Link href="/login">
						<button className="hover:font-semibold bg-primary rounded-md px-8 py-1.5">
							<p className="text-secondary">Masuk</p>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
