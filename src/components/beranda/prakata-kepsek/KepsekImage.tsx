import Image from "next/image"

function KepsekImage() {
    return (
        <div
            className="flex flex-col mx-auto my-auto p-20 relative w-3/4 lg:w-1/3  lg:flex-row"
            style={{ maxWidth: "100%", height: "600px" }}
        >
            <Image
                src="/beranda/foto-kepsek-crop.jpg"
                fill
                alt="Kepala Sekolah Yapemri BSD"
                style={{
                    objectFit: "cover",
                    objectPosition: "0% 20%",
                    position: "absolute",
                }}
                className="hidden lg:block border-white border-2 shadow-xl rounded-lg"
            />
            <Image
                src="/beranda/foto-kepsek-crop.jpg"
                fill
                alt="Kepala Sekolah Yapemri BSD"
                style={{
                    objectFit: "cover",
                    objectPosition: "top",
                    position: "absolute",
                }}
                className="block lg:hidden border-white border-2 shadow-xl rounded-lg"
            />
        </div>
    )
}

export default KepsekImage
