import React , { useEffect, useState } from 'react';
import './styles.scss'
import { format } from 'date-fns';


function Post(props) {
    const {
        ID,
        Titulo,
        Autor,
        Contenido,
        FechaPublicacion
    } = props.postData;

    const [randomImg, setNumeroAleatorio] = useState(1);
    useEffect(() => {
        const numero = Math.floor(Math.random() * 5);
        setNumeroAleatorio(numero);
    }, []);

    const { onClickVerDetalle } = props
    const formatDate =  format(FechaPublicacion, "MMM d, yyyy");
    const cutContenido = Contenido.substring(0,70) + '...';
    const arrIcons = [
        {
            url: 'https://miro.medium.com/v2/resize:fill:20:20/1*6Yc5qJmaZS2eDnw-j4moeQ.jpeg',
        },
        {
            url: 'https://miro.medium.com/v2/resize:fill:20:20/1*H-tZt4JsJlcxzVPgXztWVw.jpeg'
        },
        {
            url: 'https://miro.medium.com/v2/resize:fill:20:20/1*t5ATfQk3UNrxNvS_hf0IUg.png'
        },
        {
            url: 'https://miro.medium.com/v2/resize:fill:20:20/1*sHhtYhaCe2Uc3IU0IgKwIQ.png'
        },
        {
            url: 'https://miro.medium.com/v2/resize:fill:20:20/1*r8-YZl2YQPokMC3yGRvxwg.jpeg'
        }
    ]
    const arrImages = [
        {
            url: 'https://miro.medium.com/v2/da:true/resize:fill:200:134/0*-2-e2yn8nMnlC7_V'
        },
        {
            url: 'https://miro.medium.com/v2/resize:fill:200:134/1*H3DBMcaJgdDk4D16lggx5g.jpeg'
        },
        {
            url: 'https://miro.medium.com/v2/resize:fill:200:134/1*7xm610mINeUYJwDgatoi0A.jpeg'
        },
        {
            url: 'https://miro.medium.com/v2/resize:fill:200:134/1*6_8hxNIrLW8WBjDIhz5BtA.png'
        },
        {
            url: 'https://miro.medium.com/v2/resize:fill:200:134/1*wPGQ4oAROhDsNVfdrN40-w.png'
        }
    ]
    const detalleData = {
        ...props.postData,
        FechaPublicacion: formatDate
    }

  return (
    <div className='post' key={ID} onClick={() => onClickVerDetalle(3, detalleData)}>
        <div className='post-column-left'>
            <div className='post-header'>
                <div>
                    <a href=''>
                        <img alt="Icono autor" src={arrIcons[randomImg].url} width="20" height="20"/>
                    </a>
                    <div>
                        <h4>
                            {Autor}
                        </h4>
                    </div>
                </div>
            </div>
            <h2>
                {Titulo}
            </h2>
            <div className='post-description'>
                <h3>
                    {cutContenido}
                </h3>
            </div>
            <div className='post-date'>
                <div>
                    <span>
                        <span>
                            <span>{formatDate}</span>
                        </span>
                    </span>
                    <span>
                        <span> 6 min read</span>
                    </span>
                    <div className='topic'>
                        Books
                    </div>
                    <div></div>
                </div>
            </div>
            
        </div>
        <div className='post-column-rigth'>
            <picture>
                <img alt="Banner" src={arrImages[randomImg].url} width="200" height="134"/>    
            </picture>
            
        </div>
    </div>
  );
}

export default Post;
