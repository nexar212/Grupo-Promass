import React, { useState } from 'react';
import { postNewPost } from '../../api/posts.js';

import './styles.scss';

function Entrada() {
  const [titulo, setTitle] = useState('');
  const [contenido, setDescription] = useState('');
  const [autor, setAutor] = useState('');


  const handleChange = (event, setState) => {
    setState(event.target.value);
    event.target.style.height = 'auto'; // Restablecer la altura para calcular la altura real
    event.target.style.height = event.target.scrollHeight + 'px'; // Ajustar la altura al contenido
  };

  const guardarPost = () => {
    const fetchData = async () => {
        try {
          const response = await postNewPost({Titulo: titulo, Autor: autor,Contenido: contenido});
          console.log(response)
          setData(response);
        } catch (error) {
          console.error('Error al consultar la API:', error);
        }
      };
  
      fetchData();
  }
  return (
    <div>
        <div className='entrada-container'>
            <div>
                <div className="textarea-wrapper">
                    <textarea
                        id='title'
                        placeholder='Title'
                        value={titulo}
                        onChange={(e) => handleChange(e, setTitle)}
                        rows={1} // Inicialmente con una fila
                    />
                </div>
                <div className="textarea-wrapper">
                    <textarea
                        id='description'
                        placeholder='Tell your story'
                        value={contenido}
                        onChange={(e) => handleChange(e, setDescription)}
                        rows={1} // Inicialmente con una fila
                    />
                </div>
                <div className="textarea-wrapper">
                    <textarea
                        id='description'
                        placeholder='Autor'
                        value={autor}
                        onChange={(e) => handleChange(e, setAutor)}
                        rows={1} // Inicialmente con una fila
                    />
                </div>
            </div>
        </div>
        <div>
            <button id='publicar-button' onClick={guardarPost}>Publicar</button>
        </div>
    </div>
  );
}

export default Entrada;