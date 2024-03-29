import Swal from 'sweetalert2';
import { db } from '../firebase/firebase-config';
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

    dispatch(activeNote(doc.id, newNote));
    dispatch(addNewNote(doc.id, newNote));
    // document
    //   .querySelector(`[data-id="${doc.id}"]`)
    //   .classList.add('animate__bounceInLeft');
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
    document.querySelectorAll('.journal__entry').forEach((entry) => {
      entry.classList.add('animate__fadeIn');
    });
  };
};

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const noteToFirestore = { ...note };

    delete noteToFirestore.id;

    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

    dispatch(refreshNote(note.id, note));
    Swal.fire('Saved', note.title, 'success');
  };
};

export const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note: {
      id,
      ...note,
    },
  },
});

export const startUploading = (file) => {
  return async (dispatch, getState) => {
    const { active: activeNote } = getState().notes;

    Swal.fire({
      title: 'Uploading...',
      text: 'Please wait...',
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });

    const fileUrl = await fileUpload(file);
    activeNote.url = fileUrl;

    dispatch(startSaveNote(activeNote));
    Swal.close();
  };
};

export const startDeleting = (id) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    try {
      await db.doc(`${uid}/journal/notes/${id}`).delete();
      if (
        document
          .querySelector(`.journal__entry[data-id="${id}"]`)
          .classList.contains('animate__fadeIn')
      ) {
        document
          .querySelector(`.journal__entry[data-id="${id}"]`)
          .classList.replace('animate__fadeIn', 'animate__bounceOutLeft');
      } else if (
        document
          .querySelector(`.journal__entry[data-id="${id}"]`)
          .classList.contains('animate__bounceInLeft')
      ) {
        document
          .querySelector(`.journal__entry[data-id="${id}"]`)
          .classList.replace('animate__bounceInLeft', 'animate__bounceOutLeft');
      }
      setTimeout(() => {
        dispatch(deleteNote(id));
      }, 350);
    } catch (error) {
      console.error(error.message || error);
      Swal.fire('Error', 'Unexpected error. Try it again.', 'error');
    }
  };
};

export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id,
});

export const noteLogout = () => ({
  type: types.notesLogoutCleaning,
});
