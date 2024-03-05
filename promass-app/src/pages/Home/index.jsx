import React, { useEffect, useState, useMemo } from 'react';
import Post from '../../components/Post/index';
import { getPosts } from '../../api/posts.js';
import './styles.scss';

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

    const { onClickVerDetalle } = props;

    const filtrarPosts = (post) => {
        const lowerCaseFiltro = filtro.toLowerCase();
        return (
            post.Titulo.toLowerCase().includes(lowerCaseFiltro) ||
            post.Contenido.toLowerCase().includes(lowerCaseFiltro) ||
            post.Autor.toLowerCase().includes(lowerCaseFiltro)
        );
    };

    const postsFiltrados = useMemo(() => {
        return data.filter(filtrarPosts);
    }, [data, filtro]);

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
                    {postsFiltrados.map((post, index) => (
                        <Post key={post.id} index={index} postData={post} onClickVerDetalle={onClickVerDetalle} />
                    ))}
                </section>
            </div>
        </div>
    );
}

export default Home;