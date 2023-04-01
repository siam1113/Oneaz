import styles from './page.module.css'

export default function SignIn(){
  return(
    <main className={styles.main}>
      <div className={styles.signInCard}>
        <div className={styles.header}>
          <h1>
            Oneaz
          </h1>
          <h2>
            Sign In Now
          </h2>
          <p>
            Welcome to the worlds largest Digital Learning Platform
          </p>
        </div>
        <div className={styles.signInForm}>
          <form>
            <label htmlFor='email'>
              Email Address
            </label>
            <br/>
            <input type='email' name='email' id='email'/>
            <br/>
            <label htmlFor='password'>
              Password
            </label>
            <br/>
            <input type='password' name='password' id='password' />
            <br/>
            <input type='submit' value='Sign In'/>
          </form>
        </div>
      </div>
    </main>
  )
}