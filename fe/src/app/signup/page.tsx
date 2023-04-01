import styles from './page.module.css'

export default function SignUp(){
  return(
    <main className={styles.main}>
      <div className={styles.signUpCard}>
        <div className={styles.header}>
          <h1>
            Oneaz
          </h1>
          <h2>
            Sign Up Now
          </h2>
          <p>
            Welcome to the worlds largest Digital Learning Platform
          </p>
        </div>
        <div className={styles.signUpForm}>
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
            <label htmlFor='confirmPassword'>
              Confirm Password
            </label>
            <br/>
            <input type='password' name='confirmPassword' id='confirmPassword' />
            <br/>
            <div>
               <input type='checkbox' name='terms'/>
              <span>
                By clicking the sign up button you agree to Onzeaz'/s 
                <a href='#'>Condition of User</a>
                <a href='#'>Privacy Notice</a>
              </span>
            </div>
            <input type='submit' value='Sign Up'/>
          </form>
        </div>
      </div>
    </main>

  )
}