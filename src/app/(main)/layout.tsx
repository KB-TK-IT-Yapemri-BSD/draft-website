import Footer from "@/components/layout/main/Footer"
import Navbar from "@/components/layout/main/Navbar"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <div className="w-full bg-blue-400 pt-20">{children}</div>
      <Footer />
    </>
  )
}
