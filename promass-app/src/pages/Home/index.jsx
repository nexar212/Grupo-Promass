import React, { useEffect, useState } from 'react';
import Post from '../../components/Post/index';
import { getPosts } from '../../api/posts.js';
import './styles.scss'

function Home(props) {
    const [data, setData] = useState([]);
    const [filtro, setFiltro] = useState('');

    const handleChange = (event) => {
        setFiltro(event.target.value);
    };
    
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await getPosts();
              setData(response);
            } catch (error) {
              console.error('Error al consultar la API:', error);
            }
          };
      
          fetchData();
      }, []);
    
    const {
        onClickVerDetalle   
    } = props

    const postsFiltrados = data.filter((post) => {
        return (
          post.Titulo.toLowerCase().includes(filtro.toLowerCase()) ||
          post.Contenido.toLowerCase().includes(filtro.toLowerCase()) ||
          post.Autor.toLowerCase().includes(filtro.toLowerCase())
        );
      });

    return (
        <div>
            <div>
                <div className='filter-container'>
                    <input
                        type="text"
                        placeholder="Buscar por título, autor o contenido"
                        value={filtro}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='home-container'>
                <section className='posts-container'>
                    {postsFiltrados.map( (post, index) => {
                        return(
                            <Post index={index} postData={post} onClickVerDetalle={onClickVerDetalle}/>
                        )
                    })}
                </section>
            </div>
        </div>
    );
}

export default Home;