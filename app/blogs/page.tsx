import Link from "next/link";

function BlogsPage() {

  return (
    <div className="text-blue-600 flex justify-start align-middle space-x-3">
      <div className="flex justify-start align-top flex-col">
        <Link href="/blogs/1">
          1
        </Link>
        <Link href="/blogs/2">
          2
        </Link>
      </div>
    </div>
  );
}

export default BlogsPage;
