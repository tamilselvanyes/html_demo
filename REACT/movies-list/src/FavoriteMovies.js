import { ShowMovieList } from './ShowMovieList';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export function FavoriteMovies({value,setvalue}) {
  

  
  return (
    <div>
      <h1>Favorite Movies</h1>
      
      <div className="container">
        <div className="row">
          {value.map((nm,index) => (

            <ShowMovieList id= {index} key={index} name={nm.name} image={nm.poster} summary={nm.summary} rating={nm.rating}
            deleteButton = {<IconButton aria-label="delete" className = "delete-button" color ="error" onClick = {()=>{
              const copyMovieList = [...value];
              copyMovieList.splice(index,1);
              setvalue(copyMovieList);
            }}>
            <DeleteIcon />
          </IconButton>}/>
          ))}
        </div>
      </div>
    </div>
  );

}


