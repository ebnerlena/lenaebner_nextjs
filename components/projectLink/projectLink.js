/* eslint-disable react/prop-types */
import Link from 'next/link'
import React from 'react'
import styles from './projectLink.module.scss'

const ProjectLink = ({ link, label, icon }) => {
  return (
    <div>
      {link ? (
        <div className={styles.link__container}>
          {icon}
          <Link href={link}>
            <a target="_blank" className={styles.link}>
              {label}
            </a>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default ProjectLink
