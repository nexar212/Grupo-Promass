import React, { useState, useRef } from 'react';
import { postNewPost } from '../../api/posts.js';
import './styles.scss';

function Entrada() {
  const [titulo, setTitle] = useState('');
  const [contenido, setDescription] = useState('');
  const [autor, setAutor] = useState('');


  const handleChange = (event, setState) => {
    setState(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  };

  const elemTitleRef = useRef(null);
  const elemAutorRef = useRef(null);
  const elemDescRef = useRef(null);

  const guardarPost = () => {
    const fetchData = async () => {
        try {
          const response = await postNewPost({Titulo: titulo, Autor: autor,Contenido: contenido});
          setTitle('')
          setDescription('')
          setAutor('')

          const elemTitle = elemTitleRef.current;
          const elemAutor = elemAutorRef.current;
          const elemDesc = elemDescRef.current;

          elemTitle.style.height = 'auto'
          elemAutor.style.height = 'auto'
          elemDesc.style.height = 'auto'

        } catch (error) {
          console.error('Error al consultar la API:', error);
        }
      };
  
      fetchData();
  }
  return (
    <div>
        <div className='button-container'>
            <button id='publicar-button' onClick={guardarPost}>Publicar</button>
        </div>
        <div className='entrada-container'>
            <div>
                <div className="textarea-wrapper">
                  
                    <textarea
                        id='autor'
                        ref={elemAutorRef}
                        placeholder='Autor'
                        value={autor}
                        onChange={(e) => handleChange(e, setAutor)}
                        rows={1}
                    />
                </div>
                <div className="textarea-wrapper">
                    <textarea
                        id='title'
                        ref={elemTitleRef}
                        placeholder='Title'
                        value={titulo}
                        onChange={(e) => handleChange(e, setTitle)}
                        rows={1}
                    />
                </div>
                <div className="textarea-wrapper">
                    <textarea
                        id='description'
                        ref={elemDescRef}
                        placeholder='Tell your story'
                        value={contenido}
                        onChange={(e) => handleChange(e, setDescription)}
                        rows={1}
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Entrada;