import axios from 'axios';

const urlBackend = 'http://localhost:3000'

export async function getPosts() {
    try {
        const result = await axios.get(`${urlBackend}/posts`);
        return result.data
    } catch (error) {
        throw new Error('Error al obtener los posts');
    }
}

export async function getOnePost(id) {
    try {
        const response = await axios.get(`${urlBackend}/posts/${id}`);
        return response.data;
      } catch (error) {
        throw new Error('Error al obtener post por ID');
      }}

export async function postNewPost(newPost) {
    try {
        console.log(newPost)
        const response = await fetch('http://localhost:3000/posts', {
            mode:'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Especifica el tipo de contenido como JSON
              },
            body: JSON.stringify(newPost)
        });
        // const response = await axios.post(`${urlBackend}/posts`, newPost);
        return response;
    } catch (error) {
        throw new Error('Error al guardar post');

    }
  }