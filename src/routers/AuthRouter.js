import { Route, Switch, Redirect } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
  return (
    <div className='auth__main'>
      <div className='auth__box-container'>
        <Switch>
          <Route exact path='/journal-app/auth/login' component={LoginScreen} />
          <Route path='/journal-app/auth/register' component={RegisterScreen} />
          <Redirect to='/journal-app/auth/login' />
        </Switch>
      </div>
    </div>
  );
};
