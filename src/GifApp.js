import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GridCards } from './GridCards';

export const GifApp = () => {

    const [categorias, setCategorias] = useState([""]);

  return (
    <>
        <h1 className='tituloApp'>BUSCADOR DE TAZOS-GIFS</h1>
        <AddCategory setCategorias = {setCategorias}/>
        <hr/>
        <ol>
        {
            categorias.map(category =>{
                return <GridCards 
                categoria ={category}
                key={category}
                />
            })
            
        }
        </ol>
    </>
  )
  

};
