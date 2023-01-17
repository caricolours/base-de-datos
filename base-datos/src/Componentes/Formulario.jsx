import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
const Formulario = ({lstColaboradores, setLstColaboradores, setLstFiltradas}) => {
    const [colaborador, setColaborador] = useState('');
    const [correo, setCorreo] = useState('');

    const agregarColaborador = (e) => {
        e.preventDefault();
        setLstColaboradores([...lstColaboradores, {nombre: colaborador, correo: correo}]);
        setLstFiltradas([...lstColaboradores, {nombre: colaborador, correo: correo}]);

    }
    return (
        <div>
            <form onSubmit={agregarColaborador}>
                <div>
                    <input class="form-control mt-2" type="text" id="colaborador" name="colaborador" placeholder='Nombre Colaborador' onChange={ (e) => setColaborador(e.target.value)} />
                </div>
                <div>
                    <input class="form-control mt-2" type="text" id="correo" name="correo" placeholder='Correo Colaborador' onChange={ (e) => setCorreo(e.target.value)}/>
                </div>

                <button class="btn btn-primary mt-2">Agregar Colaborador</button>
            </form>
        </div>
    )
}

export default Formulario