import Image from 'next/image'
import React from 'react'
import styles from './about.module.scss'

const About = () => {
  return (
    <section className={styles.about} id="about">
      <h2>About me </h2>
      <div>
        <div className={styles.portrait}>
          <Image
            src="/images/me.jpeg"
            alt="Portrait Lena Ebner"
            width="10rem"
            height="15rem"
            priority={true}
            layout="responsive"
          />
        </div>
        <div>
          <h3>I am Lena Ebner.</h3>
          <p>
            I am a 22 year old student living near Salzburg, Austria. Currently
            I am studying MultiMediaTechnology BSc. in my last year at the
            University of Science in Salzburg. Below can find some of my
            projects I did in the past, which show some of my main interests -
            technology. My hobbies are widespread including programming,
            photography, music, I love to try out new things and mostly in my
            free-time I like to keep my body active by going for a run, hiking,
            biking, playing volleyball, football, tennis or whatever comes
            along. Also I enjoy nature a lot and try to spend my off-screen-time
            by going outside or reading a book to relax and/or learn new stuff.
          </p>
          <cite>
            Try not to take life too seriously all the time and keep in mind:
            The sky is the limit
          </cite>
        </div>
      </div>
    </section>
  )
}

export default About
