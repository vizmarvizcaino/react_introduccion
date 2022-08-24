function Boton ({puntuacion}) {
   function submitPuntuacion(e){
    
    console.log({puntuacion})
   }
    return(
        <div className="container-submit">
            <button className="submit" onClick={submitPuntuacion}>Enviar</button>
        </div>
    )
}

export default Boton;