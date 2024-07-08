// import styles from './css/index.css'
// import styles2 from './css/App.css'
import TarjetaUsuario from './components/TarjetaUsuario';
import ListaTareas from './components/tareas/ListaTareas';



function App() {
  const usuario = {nombre:"Andrea", edad:30, ocupacion:"Estudiante"} 
  return(
    <>
    <TarjetaUsuario {...usuario}/>
    <ListaTareas/>
    </>
  )
}






export default App
