import { useEffect, useState } from "react";
import { getGifs } from "../helper/GetGifs";

export const useFetchGifs = (categoria)=>{

const [state,setState] = useState({
    loading: true,
    data: []
});

useEffect (()=>{
   getGifs(categoria)
   .then( img =>{

    setTimeout(() => {
        setState({
            loading:false,
            data: img
        });
    }, 3000);
   })
},[categoria])

    return state;
}