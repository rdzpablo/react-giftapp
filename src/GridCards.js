import { CArdGif } from './CArdGif';
import { useFetchGifs} from './hooks/useFetchGifs';

export const GridCards = ({categoria}) => {

const {loading, data:imagenes} =  useFetchGifs (categoria);


  return (
  <>


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
