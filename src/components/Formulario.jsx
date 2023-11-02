import React, { useState } from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [color, setColor] = useState("")
    

    const handleSubmit = e => {
        e.preventDefault()
    if (nombre.trim().length < 3 || nombre.startsWith("")) {
        alert("Datos enviados")
        
    } else{
        alert("Por favor chequea que la información sea correcta");
    }

    if (color.length < 6 ){
        alert("Datos enviados")
    }
    else{
        alert("Por favor chequea que la información sea correcta");
    }

    }

return (
    <>
    <h2>Elige un color</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor="nombre"> </label>
            <input type="text"
                placeholder='Ingresa nombre'
                id='nombre'
                value={nombre}
                onChange={e=>setNombre(e.target.value)} />
    <br />            

        <label htmlFor="color"></label>
            <input type="text"
                    placeholder='Ingresa color'
                    id='color'
                    value={color}
                    onChange={e=>setColor(e.target.value)} />  

    <br />
        <button className='button'> 
            <input type="submit"
            value= "Enviar datos" />
        </button>








    </form>


    </>
)
}

export default Formulario
