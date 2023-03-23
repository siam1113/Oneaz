import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navContainer}>
       <nav className={styles.navBar}>
        <div className={styles.title}>
          Oneaz
        </div>
        <div>
          <ul>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Teachers</a></li>
            <li><a href="#">Happy Guardians</a></li>
          </ul>
        </div>
        <div>
          <ul className={styles.account}>
            <li>
              <a href="#">
              Become a Teacher
              </a>
              </li>
              <li>
              <a href="#">
              Sign In
              </a>
              </li>
              <li>
               <a href="#">
              Sign Up
              </a>
              </li>
          </ul>
        </div>
       </nav>
      </div>
      <div className={styles.featured}>
        <div>
          <div className={styles.taglines}>
            <h1>Digital Students</h1>
            <h1><b>Learning</b> <b>Platform</b></h1>
            <p>Students are digital now. Student likes to learn and want to know so we have made ONEaz for every student.</p>
          </div>
          <div className={styles.taglineAction}>
            <button>
              <a href="#">
             Know More
             </a>
            </button>
            <button>
              <a href="#">
              Start Learning
              </a>
              </button>
          </div>
        </div>
        <div>
          <img src='https://3919557.fs1.hubspotusercontent-na1.net/hub/3919557/hubfs/SDP_laptop_kids.png?width=500&name=SDP_laptop_kids.png' alt='featured' width='100%'/>
        </div>
      </div>
    </main>
  )
}
