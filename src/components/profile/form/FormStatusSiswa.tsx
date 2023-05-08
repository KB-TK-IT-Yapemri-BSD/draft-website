export default function FormStatusSiswa() {
	return (
		<>
			<div className="divide-y-2">
				<p className="text-2xl py-4">Status Siswa</p>
				<div className="py-4">
					<label
						htmlFor="first_name"
						className="block mb-2 text-sm font-medium read-only"
					>
						Status Siswa
					</label>
					<input
						type="text"
						id="disabled-input-2"
						aria-label="disabled input 2"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						value="Aktif"
						disabled
					/>
				</div>
			</div>
		</>
	);
}
