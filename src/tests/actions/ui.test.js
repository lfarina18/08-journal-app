import {
  finisLoading,
  removeError,
  setError,
  startLoading,
} from '../../actions/iu';
import { types } from '../../types/types';

describe('Pruebas en ui-actions', () => {
  test('Todas las acciones deben de funcionar', () => {
    const action = setError('lalalala');

    expect(action).toEqual({
      type: types.uiSetError,
      payload: 'lalalala',
    });

    const removeErrorAction = removeError();
    const startLoadingAction = startLoading();
    const finisLoadingAction = finisLoading();

    expect(removeErrorAction).toEqual({
      type: types.uiRemoveError,
    });
    expect(startLoadingAction).toEqual({
      type: types.uiStartLoading,
    });
    expect(finisLoadingAction).toEqual({
      type: types.uiFinishLoading,
    });
  });
});
