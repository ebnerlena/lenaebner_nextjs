/* eslint-disable react/prop-types */
import React from 'react'
import About from '../components/about/about'
import Contact from '../components/contact/contact'
import Hero from '../components/hero/hero'
import Layout from '../components/layout/layout'
import PhotoGallery from '../components/photography/photo-gallery'
import Projects from '../components/projects/projects'
import Skills from '../components/skills/skills'
import { getAllPhotosData } from '../lib/photos-loader'
import { getAllProjectsData } from '../lib/projects'

export async function getStaticProps() {
  const allProjects = getAllProjectsData()
  const allPhotos = getAllPhotosData()
  return {
    props: {
      allProjects,
      allPhotos,
    },
  }
}

const Home = ({ allProjects, allPhotos }) => {
  return (
    <Layout home>
      <Hero />
      <About />
      <Skills />
      <Projects projects={allProjects} />
      <PhotoGallery photos={allPhotos} />
      <Contact />
    </Layout>
  )
}
export default Home
