import Link from "next/link";
import styles from './shared/styles.module.css';

function BlogsPage() {

  return (
    <div className="text-blue-600 flex justify-start align-middle space-y-12 flex-col">
      <div className="flex justify-start align-top flex-col">
        <Link href="/blogs/1">
          1
        </Link>
        <Link href="/blogs/2">
          2
        </Link>
      </div>
      <hr />
      <div className="flex justify-start align-top flex-col">
        <Link href="/blogs/shared" className={ styles.text }>
          See shared blogs
        </Link>
      </div>
    </div>
  );
}

export default BlogsPage;
