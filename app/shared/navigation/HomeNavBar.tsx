import Link from "next/link";
import Image from "next/image";


function HomeNavBar() {
  return (
    <div className="flex justify-start align-middle space-x-3">
      <Link href="/projects">
        Projects
      </Link>
      <Link href="/blogs">
        Blogs
      </Link>
    </div>
  );
}

export default HomeNavBar;