'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import style from './ColorButton.module.scss';

export default function ColorButton() {
  const [color, setColor] = useState('#123fee');
  const router = useRouter();
  return (
    <div>
      <button
        className={style.colorButton}
        style={{ backgroundColor: color }}
        onClick={() => {
          setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
          router.refresh();
        }}
      >
        Color
      </button>
    </div>
  );
}
