import { useState } from 'react'
import './App.css'
import Home from './pages/Home/index'
import Entrada from './pages/Entrada/index';
import Detalle from './pages/Detalle/index';
import NavBar from './components/NavBar'

function App() {

  const [valor, setValor] = useState(1);
  const [postData, setPostData] = useState();

  const handleValorCambiado = (nuevoValor, data) => {
    setValor(nuevoValor);
    setPostData(data)
  };

  const renderizadoComponente = () => {
    switch (valor) {
      case 1:
        return <Home onClickVerDetalle={handleValorCambiado}/>;
      case 2:
        return <Entrada />;
      case 3:
        return <Detalle data={postData}/>;

      default:
        return null;
    }
  }

  return (
    <>
     <NavBar onValorCambiado={handleValorCambiado}/>

      <div className='main-container'>
        {
          renderizadoComponente()
        }
        
      </div>
      
    </>
  )
}

export default App
