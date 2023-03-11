import React from 'react'

const Card = ({nombre, carrera, edad}) => {
  return (
    <div className='border rounded-md mt-10 px-5 py-5 border-amber-500'>
        <h4 className='text-lg'>Nombre: {nombre}</h4>
        <h4 className='text-lg'>Carrera: {carrera}</h4>
        <h4 className='text-lg'>Edad: {edad}</h4>
    </div>
  )
}

export default Card;