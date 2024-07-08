// import styles from '../css/App.css'

const TarjetaUsuario = ({edad, nombre, ocupacion}) => {

    //DECONSTRUCCIÓN (EXTRAER)
    //const { edad, nombre, ocupacion } = item (lo hemos declarado arriba directamente por lo que no haría falta volver a usar item)

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