// import style from "../css/App.css"

const TarjetaUsuario = ({edad, nombre, ocupacion}) => {

    

    return(
        <>
        <div className="Tarjeta">
        <h3>Tarjeta usuario</h3>
        <ul>
            <li><b>Nombre:</b> {nombre}</li>
            <li><b>Edad:</b> {edad}</li>
            <li><b>Ocupación:</b> {ocupacion}</li>
            
        </ul>
        </div>
        </>
    )
}


export default TarjetaUsuario;