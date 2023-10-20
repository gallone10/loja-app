import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className='bg-gray-700 text-white h-20'>
    <nav className="flex flex-row items-center justify-around">
      <Link href="/" className="block py-6 hover:bg-black font-extrabold">HOME</Link>
      <Link href="/" className="block py-6 hover:bg-black font-extrabold">MAMÃO</Link>
      <Link href="/" className="block py-6 hover:bg-black font-extrabold">MELÃO</Link>
      <Link href="/" className="block py-6 hover:bg-black font-extrabold">MANGA</Link>
    </nav>
  </header>
  )
}
