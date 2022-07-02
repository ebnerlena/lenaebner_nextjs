/* eslint-disable react/prop-types */
import Link from "next/link"
import Footer from "../footer/footer"
import Header from "../header/header"
import styles from "./layout.module.scss"

export const siteTitle = "Lena Ebner Portfolio"

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/#projects">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default Layout
