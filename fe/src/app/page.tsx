import styles from './page.module.css'


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
      <div className={styles.features}>
        <div className={styles.featureHeader}>
          <h2>Our Best Features</h2>
          <p>Students are digital now. Student likes to learn and want to know so we have made ONEaz for every student.</p>
        </div>
        <div className={styles.featureBody}>
          <div className={styles.feature}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8dGRslQ8heJP3-NhoaDbtVn6FT0xR_rAhw&usqp=CAU' width='150'/>
            <h3>Ask Anytime</h3>
            <p>You can ask your doubts and clarifications from anywhere at anytime</p>
          </div>
          <div className={styles.feature}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-rkB56dCbbWv-qszX-yVJIfqvM8s1Tuo__A&usqp=CAU'width='150'/>
            <h3>Daily Live Classes</h3>
            <p>You can ask your doubts and clarifications from anywhere at anytime</p>
          </div>
          <div className={styles.feature}>
            <img src='https://cdn-icons-png.flaticon.com/512/5618/5618826.png' width='150'/>
            <h3>Live Exams</h3>
            <p>You can ask your doubts and clarifications from anywhere at anytime</p>  
          </div>
        </div>
      </div>
      <div className={styles.featuredCourses}>
        <div className={styles.featuredCoursesCol1}>
          <img src='https://www.seekpng.com/png/detail/33-336993_request-info-college-student-transparent-background.png' width='100%'/>
        </div>
        <div className={styles.featuredCoursesCol2}>
          <div className={styles.featuredCoursesHeader}>
            <h2>Featured Courses</h2>
            <p>Students are digital now. Student likes to learn and want to know so we have made ONEaz for every student.</p>
          </div>
          <div className={styles.featuredCoursesItems}>
              <div className={styles.feature}>
                <img src='https://img.freepik.com/premium-vector/online-programming-course-flat-concept-vector-illustration-computer-engineer-male-programmer-2d-cartoon-character-web-design-professional-training-through-internet-creative-idea_151150-5799.jpg?w=2000' width='100'/>
                <h3>Programming</h3>
                <p>You can ask your doubts and clarifications from anywhere at anytime</p>
              </div>
              <div className={styles.feature}>
                <img src='https://static.vecteezy.com/system/resources/previews/005/466/959/non_2x/data-analytics-business-intelligence-statistics-charts-and-spreadsheet-icon-vector.jpg'width='100'/>
                <h3>Data Analytics</h3>
                <p>You can ask your doubts and clarifications from anywhere at anytime</p>
              </div>
               <div className={styles.feature}>
                <img src='https://edutechindia.com/wp-content/uploads/2019/07/cyber_security-icon1.png'width='100'/>
                <h3>Data Analytics</h3>
                <p>You can ask your doubts and clarifications from anywhere at anytime</p>
              </div>
          </div>
        </div>
      </div>
      <div className={styles.featuredTeachers}>
        <div className={styles.featuredTeachersHeader}>
          <h2>Our Best Teachers</h2>
          <p>Students are digital now. Student likes to learn</p>
        </div>
        <div className={styles.teachers}>
          <div className={styles.teacher}>
            <img src='https://st.depositphotos.com/2309453/3076/i/950/depositphotos_30760905-stock-photo-confident-expert-teacher-looking-at.jpg' width='200' height='200'/>
            <h4>Simon Green</h4>
            <b>Management Expert</b>
            <button>Know more</button>
          </div>
          <div className={styles.teacher}>
            <img src='https://us.123rf.com/450wm/instaphotos/instaphotos2209/instaphotos220900276/191554464-smiling-indian-business-man-executive-isolated-on-gray-vertical-portrait.jpg?ver=6' width='200' height='200'/>
            <h4>Joe Cross</h4>
            <b>Development Specialist</b>
            <button>Know more</button>
          </div>
          <div className={styles.teacher}>
            <img src='https://thumbs.dreamstime.com/z/male-teacher-standing-arms-crossed-against-board-portrait-classroom-36990342.jpg' width='200' height='200'/>
            <h4>Robert Shaw</h4>
            <b>Data Analyst Expert</b>
            <button>Know more</button>
          </div>
          <div className={styles.teacher}>
            <img src='https://static1.bigstockphoto.com/5/3/2/large1500/235542859.jpg' width='200' height='200'/>
            <h4>Chris Inglis</h4>
            <b>System Admin Specialist</b>
            <button>Know more</button>
          </div>
        </div>
      </div>
      <div className={styles.featuredAnalytics}>
        <div>
          <h4>2567832+</h4>
          <b>Active Students</b>
        </div>
        <div>
          <h4>478+</h4>
          <b>Experienced Instructors</b>
        </div>
        <div>
          <h4>25666+</h4>
          <b>Online courses</b>
        </div>
        <div>
          <h4>2578+</h4>
          <b>Live class taken</b>
        </div>
      </div>
    </main>
  )
}
