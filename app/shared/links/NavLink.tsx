'use client';

import Link from 'next/link';
import styles from './NavLink.module.css';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import type { Route } from 'next';

export default function NavLink({
  url,
  label,
  children,
}: Readonly<{ url: string; label: string; children: ReactNode }>) {
  const pathName = usePathname();
  return (
    <Link
      href={ url as Route }
      className={ `${'font-sans'} ${pathName.startsWith(url) ? `font-bold ${styles.active}` : undefined}` }
      title={ `${label}` }
    >
      { children }
    </Link>
  );
}
