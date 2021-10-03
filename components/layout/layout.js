/* eslint-disable react/prop-types */
import Link from 'next/link'
import React from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'
import styles from './layout.module.scss'

export const siteTitle = 'Lena Ebner Portfolio'

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default Layout
