import React, { useEffect, useState } from 'react';
import ListaColores from './ListaColores';



const FormularioColores = () => {
     const coloresLocalStorage= JSON.parse(localStorage.getItem('listaColoresKey'))|| []
  const [listaColores, setListaColor]=useState(coloresLocalStorage)
  const [itemColor, setItemColor]= useState('')
  useEffect (()=>
  {
    localStorage.setItem('listaColoresKey', JSON.stringify(listaColores))
  },[listaColores])
  
  const handleSubmit =(e)=>
  {
    e.preventDefault();
      const colorBuscado= listaColores.find((item)=> item === itemColor)
        console.log(colorBuscado)
        if(colorBuscado)
        {
            alert('El color ya existe ya existe');
            
                setItemColor('')
            return;
        }
    setListaColor([...listaColores , itemColor])

    setItemColor('')
  }
  const eliminarColor = (nombreColor)=>
  {
    const coloresEncontrados= listaColores.filter((color)=>
    {
      
      return color !== nombreColor; 
    })
    setListaColor(coloresEncontrados)
  }

    return (
        <div className='flex flex-col items-center gap-6'>
        <form className='flex flex-col min-w-md bg-green-400 p-8 rounded-xs' onSubmit={handleSubmit} >
            <div className='flex items-center'>
                <span className='inline-block w-6 h-6 bg-red-500 mr-2'></span>
              <label htmlFor="">Ingrese un color</label>
              <input type="text" placeholder='Ej:red' className='bg-gray-400 font-bold rounded-xs pl-2 ml-2'  onChange={(e)=>setItemColor(e.target.value)}
            value={itemColor} />
            </div>
          
            <button type='submit' className='bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded mt-3 text-gray-950 hover:cursor-pointer hover:text-white hover:bg-red-600'>Crear Color</button>
        </form>
        <ListaColores listaColores={listaColores} borrarColor={eliminarColor}></ListaColores>
            
        </div>
    );
};

export default FormularioColores;