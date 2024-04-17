import Link from 'next/link'
import React from 'react';
import logoImg from '@/assets/logo.png';
import style from './main-header.module.css';
import Image from 'next/image';

export const MainHeader = () => {
  return (
    <header className={style.header}>
      <Link href="/" className={style.logo}>
        <Image
          src={logoImg}
          alt="A plate with food on it"
        />
        Amazing food
      </Link>
      <nav className={style.nav}>
        <ul>
          <li><Link href="/meals">Browse Meals</Link></li>
          <li><Link href="/community">Foodies Community</Link></li>
        </ul>
      </nav>
    </header>
  )
}
