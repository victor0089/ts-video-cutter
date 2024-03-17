// frontend/index.ts
import axios from 'axios';

const uploadForm = document.getElementById('uploadForm');
const fileInput = document.getElementById('fileInput') as HTMLInputElement;

uploadForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append('video', fileInput.files[0]);

  try {
    const response = await axios.post('http://localhost:5000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error uploading video:', error);
  }
});
