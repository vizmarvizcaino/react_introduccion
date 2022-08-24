import '../stylesheet/cards.css';
import Input from '../components/input';
import Titulo from './titulo';
import Descripcion from './descripcion';
import Calificacion from './calificacion';
import Boton from './botonsubmit';
import { useState } from 'react'


function Cards () {
    const [puntuacion, setpuntuacion] = useState('')
    
    function manejarClick(value) {
        setpuntuacion(value)
        console.log(puntuacion)
    } 
   return(
    <div className='container'>  
        <Input />
        <Titulo /> 
        <Descripcion /> 
        <div className="cali">
        <Calificacion manejarClic={manejarClick}>1</Calificacion>
        <Calificacion manejarClic={manejarClick}>2</Calificacion>
        <Calificacion manejarClic={manejarClick}>3</Calificacion>
        <Calificacion manejarClic={manejarClick}>4</Calificacion>
        <Calificacion manejarClic={manejarClick}>5</Calificacion>
        </div>
        <Boton puntuacion={puntuacion}/>
    </div>       
    
   )
}

export default Cards;