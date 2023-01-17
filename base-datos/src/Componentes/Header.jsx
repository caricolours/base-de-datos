import React from 'react'
import { Navbar } from 'react-bootstrap';
const Header = ({lstColaboradores, setLstFiltradas}) => {

  const filtrarElementos = (valorDeCaja) => {
const nuevoArreglo = lstColaboradores.filter((e) => e.nombre.includes(valorDeCaja))
setLstFiltradas(nuevoArreglo);
  }
  return (
    <>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">Buscador de Colaboradores</a>
          <form class="d-flex">
            <input onChange={(e) => filtrarElementos(e.target.value)} class="form-control me-2" type="search" placeholder="Nombre colaborador" aria-label="Search" />
            <button class="btn btn-outline-primary" type="submit">Buscar</button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default Header