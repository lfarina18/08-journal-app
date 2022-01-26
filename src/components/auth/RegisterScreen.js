import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  return (
    <div>
      <h3 className='auth__title'>Register</h3>

      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          className='auth__input mb-5'
          autoComplete='off'
        />

        <input
          type='text'
          placeholder='Email'
          name='email'
          className='auth__input mb-5'
          autoComplete='off'
        />

        <input
          type='password'
          placeholder='Password'
          name='password'
          className='auth__input mb-5 mb-5'
        />

        <input
          type='password'
          placeholder='Confirm password'
          name='password2'
          className='auth__input mb-5 mb-5'
        />

        <button type='submit' className='btn btn-primary mb-5 btn-block'>
          Register
        </button>

        <Link to='/auth/login' className='link'>
          Already Registered?
        </Link>
      </form>
    </div>
  );
};
