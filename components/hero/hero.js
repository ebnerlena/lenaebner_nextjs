import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import styles from './hero.module.scss'

const Hero = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <section className={styles.hero}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1>Lena Ebner</h1>
          <h2>[ Full Stack Software Engineer ]</h2>
        </motion.div>
        <div className={styles.le}>
          <Image
            src="/images/le.jpg"
            alt="Logo LE"
            width="500px"
            priority={true}
            height="500px"
          />
        </div>
      </motion.div>
      <div className={styles.svg}>
        <a href="#about">
          <svg height="100" width="100" stroke="#FFF" fill="#1e1e1e">
            <path d="M0 0 L50 70 L100 0 Z" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero
