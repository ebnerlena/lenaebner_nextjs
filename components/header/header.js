import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './header.module.scss'

const Header = () => {
  const [navVisibility, setNavVisibility] = useState(false)
  const [headerFixed, setHeaderFixed] = useState(false)
  const navItems = ['about', 'skills', 'projects', 'photography', 'contact']

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setHeaderFixed(true)
    } else {
      setHeaderFixed(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const toogleMenu = () => {
    if (!navVisibility) {
      setNavVisibility(true)
    } else {
      setNavVisibility(false)
    }
  }
  return (
    <div>
      <Head>
        <title>Lena Ebner Portfolio</title>
        <meta property="og:title" content="Lena Ebner Portfolio" key="title" />
        <meta property="og:charset" content="UTF-8" key="charset" />
        <meta
          property="og:description"
          content="Lena Ebner - Portfolio. Check out my latest projects, find out who I am and don't hesitate to contact me."
          key="description"
        />
        <meta
          property="og:keywords"
          content="lenaebner ebnerlena Lena Ebner lena ebner portfolio coding webdevelopment softwareengeneering appdevelopment web app game software development photography webdesign websites frontend backend"
          key="keywords"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Lena Ebner Portfolio" />
        <meta property="og:url" content="https://lenaebner.com" />
        <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
      </Head>
      <header
        className={`${styles.header} ${
          headerFixed ? styles.header__fixed : ''
        }`}
      >
        <div>
          <a href="/">
            <Image
              className={styles.logo}
              width="200rem"
              height="100rem"
              src={`${
                headerFixed ? '/images/logoblack.png' : '/images/logowhite.png'
              }`}
              alt="Lena Ebner Logo"
            />
          </a>
        </div>
        <button
          onClick={toogleMenu}
          className={`${styles.nav__tgl} ${
            navVisibility ? styles.nav__tgl_toggled : ''
          }`}
          type="button"
          aria-label="toggle menu"
        >
          <span aria-hidden="true"></span>
        </button>
        <nav
          className={`${styles.nav} ${headerFixed ? styles.nav__fixed : ''}`}
        >
          <ul className={styles.nav__list}>
            {navItems.map((item) => {
              return (
                <li className={styles.nav__list_item} key={`nav-${item}`}>
                  <a href={`/#${item}`}>{item.toUpperCase()}</a>
                </li>
              )
            })}
          </ul>
        </nav>
        <nav
          className={`${styles.nav_mobile} ${
            navVisibility ? styles.nav_mobile__visible : ''
          }`}
        >
          <ul className={styles.nav__list}>
            {navItems.map((item) => {
              return (
                <li
                  className={styles.nav__list_item}
                  key={`nav_mobile-${item}`}
                >
                  <a href={`#${item}`} onClick={toogleMenu}>
                    {item.toUpperCase()}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
