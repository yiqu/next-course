import Link from "next/link";
import type { Metadata } from "next/types";
import BLogLogo from '@/assets/graphics/blogs.png';
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kevin's Blogs",
  description: "Welcome to Kevin's home page!",
};

export default function BlogsLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className="border-blue-300 border-2 flex flex-col space-y-10">
      <Link href={ `/blogs` } className="text-cyan-600">
        Welcome to my blogs!
      </Link>
      <div>
        <Image src={ BLogLogo } alt="Blogs Logo" style={ { height: '10rem', width: '10rem' } } priority />
      </div>

      <div className="">
        { children }
      </div>
    </div>
  );
}
