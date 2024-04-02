'use client';

import { useState } from 'react';
import styles from './styles.module.css';

export default function BlogShared() {

  const [sharedStatus, setSharedStatus] = useState<{ shared: boolean; date: string | undefined }>({
    shared: false,
    date: undefined
  });

  const handleOnShareClick = () => {
    console.log("sharing");
    setSharedStatus((prev) => {
      return {
        shared: true,
        date: new Date().toISOString()
      };
    });
  };

  return (
    <div className='flex flex-col space-y-2'>
      <div className={ styles.text }>
        You can share your blogs and they will appear here.
      </div>
      <div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={ handleOnShareClick }>
          Share!
        </button>
      </div>
      {
        sharedStatus.shared && (
          <div className={ styles.text }>
            Shared on { sharedStatus.date }
          </div>
        )
      }
    </div>
  );
}