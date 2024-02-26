import React from 'react';
import './styles.scss'
import DOMPurify from 'dompurify';

function Detalle(props) {
    console.log(props)

    const {
        Autor,
        Titulo,
        Contenido,
        FechaPublicacion
    } = props.data;
    
    const contenidoSanitizado = DOMPurify.sanitize(Contenido);
    return(
        <div>
            <div className='detalle-container'>
                <section>
                    <h1>{Titulo}</h1>
                    <div>
                        <div id='detalle-autor'>
                            <div>
                                <a href='' rel="noopener follow">
                                    <img alt="Momentum" src="https://miro.medium.com/v2/resize:fill:44:44/1*YRQ1SmMdat7LtjkhFapUJw.png" width="40" height="40" loading="lazy"/>
                                </a>
                                <div>
                                    <div>
                                        <h4>
                                            {Autor}
                                        </h4>
                                    </div>
                                    <div className='detalle-date'>
                                        <div>
                                            <span>
                                                <span>
                                                    <span>{FechaPublicacion}</span>
                                                </span>
                                            </span>
                                            <span>
                                                <span> 6 min read</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div id='detalle-img'>
                        <picture>
                            <img src="https://miro.medium.com/v2/resize:fit:700/1*Y7wEammzfJoOvVRzMhhspg@2x.jpeg" alt="" />
                        </picture>
                    </div>
                    <div id='detalle-contenido' dangerouslySetInnerHTML={{ __html: contenidoSanitizado.replace(/\n/g, '<br>') }}></div>
                </section>
            </div>
        </div>
    )
}

export default Detalle