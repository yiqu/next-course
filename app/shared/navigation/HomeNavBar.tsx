import Link from 'next/link';
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
      <Link href="/pokemons" className={ styles.text }>
        Pokemons
      </Link>
      <Link href="/users" className={ styles.text }>
        Users
      </Link>
      <Link href="/quotes" className={ styles.text }>
        Quotes
      </Link>
    </div>
  );
}

export default HomeNavBar;
