import Link from 'next/link'
import React from 'react';
import logoImg from '@/assets/logo.png';
import style from './main-header.module.css';
import Image from 'next/image';
import { MainHeaderBackground } from './main-header-background';
import NavLink from './nav-link';

export const MainHeader = () => {

  return (
    <>
      <header className={style.header}>
        <Link href="/" className={style.logo}>
          <Image
            src={logoImg}
            alt="A plate with food on it"
            priority
          />
          Amazing food
        </Link>
        <nav className={style.nav}>
          <ul>
            <li><NavLink href="/meals">Browse meals</NavLink></li>
            <li><NavLink href="/community">Foodies Community</NavLink></li>
          </ul>
        </nav>
      </header>
      <MainHeaderBackground />
    </>
  )
}
