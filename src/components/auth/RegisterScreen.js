import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/iu';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange, reset] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
      reset();
    }
  };

  const isFormValid = () => {
    if (validator.isEmpty(name)) {
      dispatch(setError('Invalid name'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Invalid email'));
      return false;
    } else if (
      !validator.equals(password, password2) ||
      !validator.isStrongPassword(password, [{ minLenght: 5 }])
    ) {
      dispatch(setError('Invalid password'));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <div>
      <h3 className='auth__title'>Register</h3>

      <form
        onSubmit={handleRegister}
        className='animate__animated animate__fadeIn animate__faster'>
        {msgError && <div className='auth__alert-error'>{msgError}</div>}

        <input
          type='text'
          placeholder='Name'
          name='name'
          className='auth__input mb-5'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />

        <input
          type='email'
          placeholder='Email'
          name='email'
          className='auth__input mb-5'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />

        <input
          type='password'
          placeholder='Password'
          name='password'
          autoComplete='off'
          className='auth__input mb-5 mb-5'
          value={password}
          onChange={handleInputChange}
        />

        <input
          type='password'
          placeholder='Confirm password'
          name='password2'
          autoComplete='off'
          className='auth__input mb-5 mb-5'
          value={password2}
          onChange={handleInputChange}
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
