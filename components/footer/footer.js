import moment from 'moment'
import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>
          &copy; Ebner Lena <span>{moment().format('YYYY')}</span>
        </p>
        <p>[ all rights are reserved by the respective owner ]</p>
      </div>
    </footer>
  )
}

export default Footer
