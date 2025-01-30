import Link from 'next/link'
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-3 px-6 sm:px-16 border-b'>
            <Link href='/'>
                <h1 className="font-bold text-xl hover:text-blue-500">
                    BitLink
                </h1>
            </Link>

            <Link
                href='https://github.com/harshkaralia-source'
                target='_blank'>
                <button className='px-4 py-2 bg-blue-500 text-white rounded-md flex gap-2 text-sm'>
                    <FaGithub size={20} />
                    Get Code
                </button>
            </Link>
        </nav>
    )
}

export default Navbar
