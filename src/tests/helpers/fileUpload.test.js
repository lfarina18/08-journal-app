import cloudinary from 'cloudinary';
import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({
  cloud_name: 'lfarina18',
  api_key: '691847277178393',
  api_secret: 'i-PDL9VqI2_A4xQUu90ss9nw6-Y',
});

describe('Pruebas en fileUpload', () => {
  test('debe de cargar un archivo y retornar el URL', async () => {
    const resp = await fetch(
      'https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/10-Free-To-Use-CORS-Proxies-1024x768.png'
    );

    const blob = await resp.blob();

    const file = new File([blob], 'foto.jpg');
    const url = await fileUpload(file);

    expect(typeof url).toBe('string');

    // Borrar imagen por id
    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.png', '');
    const folderName = 'journal-app';
    cloudinary.v2.api.delete_resources(`${folderName}/${imageId}`, {}, () => {
      // done();
    });
  });

  test('debe de retornar un error', async () => {
    const file = new File([], 'foto.jpg');
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
