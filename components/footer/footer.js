import moment from "moment"
import styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>
          &copy; Ebner Lena{" "}
          <span>
            {moment().format("YYYY")} | Mondseestaße 111, 5310 St. Lorenz
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
