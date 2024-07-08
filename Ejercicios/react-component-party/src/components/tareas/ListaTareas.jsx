

const tareas = [
    { id: 1, nombre: 'Estudiar React', completada: true },
    { id: 2, nombre: 'Ir a la playa', completada: false },
    { id: 3, nombre: 'Comer paella', completada: false },
    { id: 4, nombre: 'Cocinar', completada: true },
    { id: 5, nombre: 'Tomar el sol', completada: false },
];

const ListaTareas = ({tarea}) => {

    return(
        <div>
            <h2>Tareas de este verano:</h2>
            {
                tarea.map(element => {
                    const{id, tarea, isCompletada} = element;
                    return(
                        <Tarea key={id} tarea={tarea} isCompletada={isCompletada}/>
                    )
                })
            }
        </div>
    )

}



export default ListaTareas;