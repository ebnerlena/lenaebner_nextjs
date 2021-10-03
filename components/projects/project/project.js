/* eslint-disable react/prop-types */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../projects.module.scss'

const Project = ({ id, title, date, text, image }) => {
  return (
    <div className={styles.single__project}>
      <Link href={`/projects/${id}`}>
        <a>
          <h3>{title}</h3>
          <div>
            <Image
              src={`/images/projects/${image}`}
              height="2em"
              width="3em"
              layout="responsive"
              alt={`Project: ${title}`}
            />
          </div>
          <p>{text}</p>
        </a>
      </Link>
    </div>
  )
}

export default Project
