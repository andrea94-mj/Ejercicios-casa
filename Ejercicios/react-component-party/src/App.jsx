import './css/App.css'
import TarjetaUsuario from './components/TarjetaUsuario';
import ListaTareas from './components/tareas/ListaTareas';




function App() {
  const usuario = {nombre:"Andrea", edad:30, ocupacion:"Estudiante"} 

  const tarea = [
    { id: 1, nombre: 'Estudiar React', completada: true },
    { id: 2, nombre: 'Ir a la playa', completada: false },
    { id: 3, nombre: 'Comer paella', completada: false },
    { id: 4, nombre: 'Cocinar', completada: true },
    { id: 5, nombre: 'Tomar el sol', completada: false },
];
  return(
    <>
    <TarjetaUsuario {...usuario}/>
    <ListaTareas tarea = {tarea} />
    </>
  )
}






export default App
