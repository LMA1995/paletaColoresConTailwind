import React from 'react';

const ItemColor = ({color , borrarColor}) => {
    return (
        <>
        <div className='bg-gray-500 p-5 rounded-2xl flex flex-col max-w-2xs items-center'>
            <h4 className='text-center font-bold   '>{color}</h4>
            <span style={
                {
                     width: "80px",
            height: "80px",
            backgroundColor: color
                }
            }></span>
            <button type='button' className='bg-red-600 text-white font-bold rounded-xl p-2 m-2 hover:cursor-pointer hover:bg-mist-950 hover:text-amber-100 transition-transform' onClick={()=>borrarColor(color)}>Eliminar</button>
        </div>
            
        </>
    );
};

export default ItemColor;