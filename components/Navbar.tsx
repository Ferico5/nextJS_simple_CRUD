'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Lecturer',
    url: '/lecturer',
  },
  {
    id: 3,
    title: 'Student',
    url: '/student',
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between mb-8">
      <Link href="/">
        <h1>University NextJS</h1>
      </Link>

      <div className="flex gap-5 items-center ">
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={`hover:text-green-400 transition ${pathname === link.url ? 'text-green-500 font-semibold' : 'text-white'}`}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
