import { BaseColaboradores } from './BaseColaboradores.js';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaColaboradores from "./Componentes/ListaColaboradores.jsx";
import Formulario from "./Componentes/Formulario.jsx";
import Header from './Componentes/Header.jsx';

function App() {
  const [lstColaboradores, setLstColaboradores] = useState(BaseColaboradores)
  const [lstFiltradas, setLstFiltradas] = useState(BaseColaboradores)
  return (
    <div className="App">
      <Header lstColaboradores={lstColaboradores} setLstFiltradas={setLstFiltradas}></Header>
      <Formulario lstColaboradores={lstColaboradores} setLstColaboradores={setLstColaboradores} setLstFiltradas={setLstFiltradas}></Formulario>
      <ListaColaboradores lstColaboradores={lstFiltradas}></ListaColaboradores>
      
    </div>
  );
}

export default App;
