/* eslint-disable react/prop-types */
import React from 'react'
import Project from './project/project'
import styles from './projects.module.scss'

const Projects = ({ projects }) => {
  return (
    <section className={styles.projects} id="projects">
      <h2>Projects</h2>
      <ul>
        {projects &&
          projects.map(({ id, title, date, short, image }) => (
            <li key={id}>
              <Project
                id={id}
                title={title}
                date={date}
                text={short}
                image={image}
              />
            </li>
          ))}
      </ul>
    </section>
  )
}

export default Projects
