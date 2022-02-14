import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Pruebas en authReducer', () => {
  test('Debe de hacer el login', () => {
    const initState = {};

    const action = {
      type: types.login,
      payload: {
        uid: 'abc',
        displayName: 'leonardo',
      },
    };

    const state = authReducer(initState, action);

    expect(state).toEqual({
      uid: 'abc',
      name: 'leonardo',
    });
  });

  test('Debe de hacer el logout', () => {
    const initState = {
      uid: 'jfkdjfglkgjldfgkf',
      name: 'Leonardo',
    };

    const action = {
      type: types.logout,
    };

    const state = authReducer(initState, action);

    expect(state).toEqual({});
  });

  test('No debe de hacer cambios en el state', () => {
    const initState = {
      uid: 'jfkdjfglkgjldfgkf',
      name: 'Leonardo',
    };

    const action = {
      type: 'fdsdfdsfdfsf',
    };

    const state = authReducer(initState, action);

    expect(state).toEqual(initState);
  });
});
