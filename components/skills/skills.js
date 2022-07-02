import styles from "./skills.module.scss"

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <h2>Services &amp; Skills</h2>
      <ul className={styles.skills__list}>
        <li>
          <span>Web-Development: </span>Frontend, Backend, CMS, Web-based Games
        </li>
        <li>
          <span>App-Development: </span>Android Apps, Flutter, Progressive Web
          Apps
        </li>
        <li>
          <span>Game-Development: </span>Unity, Aframe.io, ARCore, Babylon.js
        </li>
        <li>
          <span>Photography</span> &amp; <span>Video Editing</span>
        </li>
        <li>
          <span>Cooperate Design: </span>Flyer, Logo etc.
        </li>
      </ul>
      <div>
        <h3 className={styles.technologies}>Technologies I use</h3>
        <p>
          C#, .Net, HTML, CSS, SASS, Php, JavaScript, TypeScript, Node.js,
          WordPress, Kotlin, Flutter, Next.js, React, Ruby on Rails, Angular,
          SQL, Python, ARCore, Linux, Firebase, PostgreSQL, MySQL, Docker ...
        </p>
      </div>
    </section>
  )
}

export default Skills
