import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function FormDetailFormPendaftar({ params }: { params: any }) {
	const { id } = params;
	const { data: session } = useSession();

	const [form, setForm] = useState();

	const getForm = async () => {
		try {
			let res = await fetch(`http://localhost:4000/v1/forms/${id}`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${session?.user.token.accessToken}`,
				},
			});

			const data = await res.json();
			setForm(data);
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		getForm();
	}, []);

	return (
		<div className="divide-y-2">
			<div className="space-y-2">
				<div className="py-2 pt-6">
					<label
						htmlFor="name"
						className="block mb-2 text-sm font-medium read-only"
					>
						Nama Lengkap Orang Tua
					</label>
					<input
						type="text"
						id="name"
						name="name"
						aria-label="name"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						value={form ? form['name'] : 'NO DATA'}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="email"
						className="block mb-2 text-sm font-medium read-only"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						aria-label="email"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						value={form ? form['email'] : 'NO DATA'}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="phone"
						className="block mb-2 text-sm font-medium read-only"
					>
						No. Telephone
					</label>
					<input
						type="text"
						id="phone"
						name="phone"
						aria-label="phone"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						value={form ? form['phone'] : 'NO DATA'}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="address"
						className="block mb-2 text-sm font-medium read-only"
					>
						Alamat
					</label>
					<input
						type="text"
						id="address"
						name="address"
						aria-label="address"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						value={form ? form['address'] : 'NO DATA'}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="numChildrens"
						className="block mb-2 text-sm font-medium read-only"
					>
						Jumlah Anak yang Akan Disekolahkan
					</label>
					<input
						type="text"
						id="numChildrens"
						name="numChildrens"
						aria-label="numChildrens"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						value={form ? form['numChildrens'] : 'NO DATA'}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="ageChildrens"
						className="block mb-2 text-sm font-medium read-only"
					>
						Umur Anak yang Akan Disekolahkan
					</label>
					<input
						type="text"
						id="ageChildrens"
						name="ageChildrens"
						aria-label="ageChildrens"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						value={form ? form['ageChildrens'] : 'NO DATA'}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="grade"
						className="block mb-2 text-sm font-medium read-only"
					>
						Kelompok Usia yang Diinginkan
					</label>
					<input
						type="text"
						id="grade"
						name="grade"
						aria-label="grade"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						value={form ? form['grade'] : 'NO DATA'}
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="reason"
						className="block mb-2 text-sm font-medium read-only"
					>
						Alasan
					</label>
					<textarea
						id="reason"
						name="reason"
						aria-label="reason"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-auto"
						value={form ? form['reason'] : 'NO DATA'}
						disabled
					/>
					{/**
					 * <input
						type="text"
						id="reason"
						name="reason"
						aria-label="reason"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 whitespace-nowrap"
						value={form ? form['reason'] : 'NO DATA'}
						disabled
					/>
					 */}
				</div>
			</div>
		</div>
	);
}
