/* eslint-disable react/prop-types */
import Image from "next/image"
import Link from "next/link"
import styles from "../projects.module.scss"

const Project = ({ id, title, date, text, image }) => {
  return (
    <div className={styles.single__project}>
      <Link href={`/projects/${id}`}>
        <a>
          <h3>{title}</h3>
          <div className={styles.image__wrapper}>
            <Image
              src={`/images/projects/${image}`}
              height="150rem"
              width="200rem"
              priority={true}
              objectFit={"cover"}
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
