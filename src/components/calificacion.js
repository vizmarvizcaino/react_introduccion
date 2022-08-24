import '../stylesheet/calificacion.css';

function Calificacion ({children, manejarClic}) {
    return(
        <>
            <div className="calificacion" onClick={() => manejarClic(children)}>
                {children} 
            </div>  
        </>  
    )  
}
export default Calificacion;