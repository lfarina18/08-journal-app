import moment from 'moment';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

  /* Referencia para el <input>. Se crea del componente*/
  const inputFile = useRef(null); // De inicio no se asigna a nada.

  const CurrentDay = moment().format('ll');

  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handlePictureClick = () => {
    inputFile.current.click(); // La referencia se usa y se "ejecuta" su click
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
      inputFile.current.value = '';
    }
  };

  return (
    <div className='notes__appbar'>
      <span>{CurrentDay}</span>

      <input
        ref={inputFile}
        type='file'
        name='file'
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      <div>
        <button className='btn' onClick={handlePictureClick}>
          Picture
        </button>
        <button className='btn' onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
