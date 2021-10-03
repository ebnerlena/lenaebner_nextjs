import React from 'react'
import styles from './contact.module.scss'

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2>Contact Details</h2>
      <h3>Where to catch up with me?</h3>
      <div>
        <ul className={styles.contact_details}>
          <li>
            <img src="images/mail.svg" alt="Mail Icon" />
            <p>
              <b>Email: </b>
              <a href="mailto:leeena.ebner@gmail.com">leeena.ebner@gmail.com</a>
            </p>
          </li>
          <li>
            <img src="images/phone.svg" alt="Phone Icon" />
            <p>
              <b>Phone: </b>
              <a href="tel:+436503038876">+43 650 3038876</a>
            </p>
          </li>
          <li>
            <img src="images/github_w.png" alt="GitHub Icon" />
            <p>
              <b>GitHub: </b>
              <a href="https://github.com/ebnerlena">
                https://github.com/ebnerlena
              </a>
            </p>
          </li>
          <li>
            <img src="images/linkedin.png" alt="LinkedIn Icon" />
            <p>
              <b>LinkedIn: </b>
              <a href="https://www.linkedin.com/in/lena-ebner-4b6b051ba/">
                https://www.linkedin.com/in/lena-ebner-4b6b051ba/
              </a>
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
