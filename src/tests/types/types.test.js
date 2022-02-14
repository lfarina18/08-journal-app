import { types } from '../../types/types';

describe('Pruebas con nuestros tipos', () => {
  test('Debe de tener estos tipos', () => {
    const typesTest = {
      login: '[auth] Login',
      logout: '[auth] Logout',

      uiSetError: '[UI] Set Error',
      uiRemoveError: '[UI] Remove Error',

      uiStartLoading: '[UI] Start loading',
      uiFinishLoading: '[UI] Finish loading',

      notesAddNew: '[Notes] New note',
      notesActive: '[Notes] Set active note',
      notesLoad: '[Notes] Load note',
      notesUpdated: '[Notes] Update note',
      notesFileUrl: '[Notes] Update image url',
      notesDelete: '[Notes] Delete note',
      notesLogoutCleaning: '[Notes] Logout Cleaning',
    };

    expect(types).toEqual(typesTest);
  });
});
