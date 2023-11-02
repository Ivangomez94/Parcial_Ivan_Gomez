import React, { useState } from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [color, setColor] = useState("")
    

    const handleSubmit = e => {
        e.preventDefault()
        if (
            nombre.trim().length < 3 ||
            nombre.trim().startsWith(' ') ||
            color.length < 6
        ) {
            alert('Por favor chequea que la información sea correcta')
        } else {
            console.log('los datos fueron enviados correctamente')
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
