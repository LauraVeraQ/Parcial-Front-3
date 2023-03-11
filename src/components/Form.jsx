import React, { useState } from 'react'
import Card from './Card';

export const Form = () => {
    const [nombre,setNombre] = useState("");
    const [carrera,setCarrera] = useState("");
    const [edad,setEdad] = useState(0);
    const [alerta,setAlerta] = useState(false);
    const [mensajeAlerta,setMensajeAlerta] = useState("");
    const [muestraCard, setMuestraCard] = useState(false);
    const handleChangeName = (e)=>{
        setNombre(e.target.value)
        setMuestraCard(false)
    }
    const handleChangeCarrera = (e)=>{
        setCarrera(e.target.value)
        setMuestraCard(false)
    }
    const handleChangeEdad = (e)=>{
        setEdad(e.target.value)
        setMuestraCard(false)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(nombre.length <= 3 || nombre[0] === " "){
            setAlerta(true)
            setMensajeAlerta("Por favor chequea que la información sea correcta")
            setMuestraCard(false)
            console.log('entronombre')
        }
        if(carrera.length <= 6 ){
            setAlerta(true)
            setMensajeAlerta("Por favor chequea que la información sea correcta")
            setMuestraCard(false)
        }
        if (nombre.length > 3 && carrera.length > 6 && nombre[0] !== " ") {
            setAlerta(false)
            setMensajeAlerta("")
            setMuestraCard(true)
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <h2 className='text-3xl font-bold mb-5 text-amber-500'>BIENVENIDO</h2>
        <h2 className='text-2xl mb-12 text-orange-200'>FORMULARIO DE PERSONAS UNIVERSITARIAS</h2>
        <div className='flex flex-col'>
        <label className='text-xl font-bold mb-3 mt-3 text-amber-500'>Nombre: </label>
        <input  className = 'rounded-xl px-3 py-2' type='text' onChange={handleChangeName} value={nombre} required/>
        <label className='text-xl font-bold mb-3 mt-3 text-amber-500'>Carrera: </label>
        <input  className = 'rounded-xl px-3 py-2' type='text' onChange={handleChangeCarrera} value={carrera} required/>
        <label className='text-xl font-bold mb-3 mt-3 text-amber-500'>Edad: </label>
        <input  className = 'rounded-xl px-3 py-2' type='number' onChange={handleChangeEdad} value={edad} required/>
        </div>
        <div>
            <input className='border rounded-md px-5 py-3 mt-12 text-amber-500 border-amber-500' type='submit' value="Enviar"/>
            {alerta && <div className='mt-2 mb-2 text-red-600'>{mensajeAlerta}</div>}
            {muestraCard && <Card nombre={nombre} carrera={carrera} edad={edad}/>}
        </div>
    </form>
  )
}
export default Form;
