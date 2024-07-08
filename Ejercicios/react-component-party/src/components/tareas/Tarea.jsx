const Tarea = ({tarea, isCompletada}) => {
    return (
        <>
        <div>
            <h3>Tu tarea es:</h3>
            {tarea}
            
            <button>Completar tarea</button>
            {
                isCompletada && (
                    <button>Eliminar tarea</button>
                )
            }
        </div>
        </>
    )
}

export default Tarea;