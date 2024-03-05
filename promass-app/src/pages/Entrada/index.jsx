import React, { useState, useRef } from 'react';
import { postNewPost } from '../../api/posts.js';
import './styles.scss';

function Entrada() {
  const [inputs, setInputs] = useState({
    titulo: '',
    contenido: '',
    autor: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
      event.target.style.height = 'auto';
      event.target.style.height = event.target.scrollHeight + 'px';
  };

  const elemTitleRef = useRef(null);
  const elemAutorRef = useRef(null);
  const elemDescRef = useRef(null);

  const adjustTextareaHeight = (textarea) => {
    textarea.style.height = 'auto';
  };

  const guardarPost = async () => {
    try {
      await postNewPost({Titulo: inputs.titulo, Autor: inputs.autor, Contenido : inputs.contenido});
      setInputs({
        titulo: '',
        contenido: '',
        autor: ''
      });

      adjustTextareaHeight(elemTitleRef.current);
      adjustTextareaHeight(elemAutorRef.current);
      adjustTextareaHeight(elemDescRef.current);  

    } catch (error) {
      console.error('Error al consultar la API:', error);
    }
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
                        name='autor'
                        ref={elemAutorRef}
                        placeholder='Autor'
                        value={inputs.autor}
                        onChange={handleChange}
                        rows={1}
                    />
                </div>
                <div className="textarea-wrapper">
                    <textarea
                        id='title'
                        name='titulo'
                        ref={elemTitleRef}
                        placeholder='Title'
                        value={inputs.titulo}
                        onChange={handleChange}
                        rows={1}
                    />
                </div>
                <div className="textarea-wrapper">
                    <textarea
                        id='description'
                        name='contenido'
                        ref={elemDescRef}
                        placeholder='Tell your story'
                        value={inputs.contenido}
                        onChange={handleChange}
                        rows={1}
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Entrada;