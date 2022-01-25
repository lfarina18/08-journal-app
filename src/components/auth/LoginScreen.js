import { Link } from 'react-router-dom';

export const LoginScreen = () => {
  return (
    <div>
      <h3 className='auth__title'>Login</h3>

      <form>
        <input
          type='text'
          placeholder='Email'
          name='email'
          className='auth__input'
          autocomplete='off'
        />

        <input
          type='password'
          placeholder='Password'
          name='password'
          className='auth__input mt-5'
        />

        <button type='submit' className='btn btn-primary mt-5 btn-block'>
          Login
        </button>

        <div className='auth__social-network'>
          <p className='mb-1'>Login with social networks</p>

          <div className='google-btn '>
            <div className='google-icon-wrapper'>
              <img
                className='google-icon'
                src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                alt='google button'
              />
            </div>

            <p className='btn-text'>
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to='/auth/register' className='link mt-5'>
          Create a new account
        </Link>
      </form>
    </div>
  );
};