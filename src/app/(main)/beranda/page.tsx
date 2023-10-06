import { Fragment } from "react"

import DaftarGuruSekolah from "@/components/beranda/DaftarGuruSekolah"
import Diagram from "@/components/beranda/Diagram"
import FAQCorner from "@/components/beranda/FAQCorner"
import KisahSuksesOrtu from "@/components/beranda/KisahSuksesOrtu"
import KurikulumSekolah from "@/components/beranda/KurikulumSekolah"
import PrakataKepsek from "@/components/beranda/prakata-kepsek/PrakataKepsek"
import PrestasiSekolah from "@/components/beranda/PrestasiSekolah"
import VideoProfil from "@/components/beranda/VideoProfil"
import BerandaHeader from "@/components/layout/BerandaHeader"

export const metadata = {
    title: "Beranda / KB TK IT Yapemri BSD",
}

export default function Beranda() {
    return (
        <Fragment>
            <BerandaHeader />
            <VideoProfil />
            <PrakataKepsek />
            <Diagram />
            <DaftarGuruSekolah />
            <KurikulumSekolah />
            <PrestasiSekolah />
            <KisahSuksesOrtu />
            <FAQCorner />
        </Fragment>
    )
}
