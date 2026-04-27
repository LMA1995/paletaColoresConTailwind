import React from 'react';
import ItemColor from './ItemColor';

const ListaColores = ({listaColores , borrarColor}) => {
    return (
        <div>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
            {
                listaColores.map((color ,indice)=><ItemColor key={indice} color={color} borrarColor={borrarColor}/>)
            }
            
        </div>
        </div>
    );
};

export default ListaColores;