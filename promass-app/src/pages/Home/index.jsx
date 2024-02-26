import React, { useEffect, useState } from 'react';
import Post from '../../components/Post/index';
import InputFilter from '../../components/InputFilter/index.jsx';
import { getPosts } from '../../api/posts.js';

import './styles.scss'

function Home(props) {
    const [data, setData] = useState([]);

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

    return (
        <div>
            <div>
                <InputFilter arrData={data}/>
            </div>
            <div className='home-container'>
                <section className='posts-container'>
                    {data.map( (post, index) => {
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