import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
  const { loading } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <div>
      <h3 className='auth__title'>Login</h3>

      <form
        onSubmit={handleLogin}
        className='animate__animated animate__fadeIn animate__faster'>
        <input
          type='text'
          placeholder='Email'
          name='email'
          className='auth__input'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />

        <input
          type='password'
          placeholder='Password'
          name='password'
          className='auth__input mt-5'
          autoComplete='off'
          value={password}
          onChange={handleInputChange}
        />

        <button
          type='submit'
          className='btn btn-primary mt-5 btn-block'
          disabled={loading}>
          Login
        </button>

        <div className='auth__social-network'>
          <p className='mb-1'>Login with social networks</p>

          <div className='google-btn ' onClick={handleGoogleLogin}>
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
        <Link to='/journal-app/auth/register' className='link mt-5'>
          Create a new account
        </Link>
      </form>
    </div>
  );
};
