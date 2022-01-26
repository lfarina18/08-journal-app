import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
      <NotesAppBar />
      <div className='notes__content'>
        <input
          type='text'
          placeholder='Some awasome title'
          className='note__title-input'
        />

        <textarea
          placeholder='What happened today?'
          className='notes_-textarea'></textarea>

        <div className='note__image'>
          <input type="image" src={'https://images8.alphacoders.com/490/thumb-1920-490410.jpg'} alt="car photo" />
        </div>
      </div>
    </div>
  );
};
