import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {

const [value, setValue] = useState("");

const handleOnChange = (e)=>{
    setValue (e.target.value);

}

const handleOnSubmit = (e) =>{
    e.preventDefault();
    console.log("realizado");
    if(value.trim().length > 1){
        setCategorias(cats=>[value]);
        setValue ("");
    }
    
}

  return(
  <>
   <form onSubmit={handleOnSubmit}>
   <input
       type="text"
       value= {value}
       onChange={handleOnChange}
    />
   </form>
  </>
  )
};

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}