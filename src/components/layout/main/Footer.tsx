import Link from 'next/link';
import Image from 'next/image';

function Footer() {
	return (
		<div className=" bg-secondary text-white divide-y-[1px]">
			<div className="mx-40 py-20 flex">
				<div className="w-2/3">
					<Image
						src="/logo.png"
						width={53}
						height={53}
						alt="Logo KB TK IT Yapemri BSD"
					></Image>
					<p className="py-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quaerat, qui.
					</p>
					<div className="font-medium">
						<p>info@kbtkityapemri.sch.id</p>
						<p>kbtkityapemri@yahoo.co.id</p>
					</div>
				</div>
				<div>
					<p className="pb-4">Lokasi</p>
					<div className="w-80 h-60 bg-blue-200"></div>
				</div>
			</div>
			<div className="mx-40 py-10">
				<p>Copyright © KB TK IT Yapemri BSD. All Rights Reserved.</p>
			</div>
		</div>
	);
}

export default Footer;
