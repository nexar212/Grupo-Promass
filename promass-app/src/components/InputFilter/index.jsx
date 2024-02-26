import React, { useState } from 'react';
import './styles.scss'

export default function InputFilter ({ arrData }) {
  const [filtro, setFiltro] = useState('');

  const handleChange = (event) => {
    setFiltro(event.target.value);
  };

  // const datosFiltrados = arrData.filter((dato) => {
  //   return (
  //     dato.Titulo.toLowerCase().includes(filtro.toLowerCase()) ||
  //     dato.Autor.toLowerCase().includes(filtro.toLowerCase()) ||
  //     dato.Contenido.toLowerCase().includes(filtro.toLowerCase())
  //   );
  // });

  return (
    <div className='filter-container'>
      <input
        type="text"
        placeholder="Buscar por título, autor o contenido"
        value={filtro}
        onChange={handleChange}
      />
      
    </div>
  );
}