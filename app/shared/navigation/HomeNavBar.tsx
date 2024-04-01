import Link from "next/link";
import styles from './HomeNavBar.module.css';

function HomeNavBar() {
  return (
    <div className="flex justify-start align-middle space-x-3">
      <Link href="/projects" className={ styles.text2 }>
        Projects
      </Link>
      <Link href="/blogs" className={ styles.text }>
        Blogs
      </Link>
    </div>
  );
}

export default HomeNavBar;