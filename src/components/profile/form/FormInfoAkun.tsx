export default function FormInfoAkun() {
	return (
		<>
			<div className="space-y-2">
				<div className="py-2 pt-4">
					<label
						htmlFor="first_name"
						className="block mb-2 text-sm font-medium read-only"
					>
						Email
					</label>
					<input
						type="text"
						id="disabled-input-2"
						aria-label="disabled input 2"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						value="sucimeimei@gmail.com"
						disabled
					/>
				</div>

				<div className="py-2">
					<label
						htmlFor="first_name"
						className="block mb-2 text-sm font-medium read-only"
					>
						Password
					</label>
					<input
						type="text"
						id="disabled-input-2"
						aria-label="disabled input 2"
						className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						value="*******"
						disabled
					/>
				</div>
			</div>
		</>
	);
}