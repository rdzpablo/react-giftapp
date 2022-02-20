import { CArdGif } from './CArdGif';
import { useFetchGifs} from './hooks/useFetchGifs';

export const GridCards = ({categoria}) => {

const {loading, data:imagenes} =  useFetchGifs (categoria);


  return (
  <>

  {loading ? <p>Cargando...</p> : <p>Carga exitosa</p>}
  
  <div className='gifs'>
    {
        imagenes.map( img => (
            <CArdGif
             {...img}
             />
        ))
    }
  </div>

</>
  )
  
};
