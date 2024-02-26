import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/index'
import Listado from './pages/Listado/index'
import Entrada from './pages/Entrada/index';
import NavBar from './components/NavBar'

function App() {

  const [valor, setValor] = useState(1);

  // Función de devolución de llamada para recibir el valor del componente hijo
  const handleValorCambiado = (nuevoValor) => {
    setValor(nuevoValor);
  };

  const renderizadoComponente = () => {
    switch (valor) {
      case 1:
        return <Home />;
      case 2:
        return <Entrada />;
      case 3:
        return <Listado />;

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
