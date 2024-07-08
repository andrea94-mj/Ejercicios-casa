// import styles from './css/index.css'
// import styles2 from './css/App.css'
import TarjetaUsuario from './components/TarjetaUsuario';



function App() {
  const usuario = {nombre:"Andrea", edad:30, ocupacion:"Estudiante"} 
  return(
    <>
    <TarjetaUsuario {...usuario}/>
    </>
  )
}






export default App
