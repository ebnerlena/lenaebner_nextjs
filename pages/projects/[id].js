/* eslint-disable react/prop-types */
import Image from 'next/image'
import React from 'react'
import { BsCalendar3 } from 'react-icons/bs'
import { FaCode, FaLink, FaUniversity } from 'react-icons/fa'
import Date from '../../components/date'
import Layout from '../../components/layout/layout'
import ProjectLink from '../../components/projectLink/projectLink'
import { getAllProjectsIds, getProjectData } from '../../lib/projects'
import styles from './project.module.scss'

export default function Post({ projectData }) {
  return (
    <Layout>
      <div className={styles.project__page}>
        <section className={styles.project__content}>
          <div className={styles.project__main}>
            <div className={styles.project__image}>
              <Image
                src={`/images/projects/${projectData.image}`}
                height="2em"
                width="3em"
                layout="responsive"
                alt={`Project: ${projectData.title}`}
              />
            </div>
            <h1 className={styles.project__title}>{projectData.title}</h1>
            <p
              dangerouslySetInnerHTML={{ __html: projectData.content }}
              className={styles.project__text}
            />
          </div>
          <aside className={styles.project__sidebar}>
            <h3>{projectData.short}</h3>
            <div className={styles.project__date_container}>
              <BsCalendar3 />
              Done:{' '}
              <Date
                dateString={projectData.date}
                className={styles.project__date}
              />
            </div>
            <div className={styles.project__links}>
              <ProjectLink
                label="Check Source Code"
                link={projectData.repo_url}
                icon={<FaCode />}
              />
              <ProjectLink
                label="View it Live"
                link={projectData.deploy_url}
                icon={<FaLink />}
              />
              <ProjectLink
                label="View Project on FH Portfolio"
                link={projectData.portfolio_link}
                icon={<FaUniversity />}
              />
            </div>
          </aside>
        </section>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  // return an array of possible values for id
  const paths = getAllProjectsIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // fetch data with params.id
  const projectData = await getProjectData(params.id)
  return {
    props: {
      projectData,
    },
  }
}
