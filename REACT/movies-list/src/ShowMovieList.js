import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import InfoIcon from '@mui/icons-material/Info';
import {useHistory} from 'react-router-dom'

export function ShowMovieList({ name, image, summary, rating, deleteButton, id}) {

  const [like, setLike] = useState(0);
  const [dislike, setdislike] = useState(0);
  const styles = {
    backgroundColor: rating > 8 ? "green" : "orange"
  };
  const [show, setShow] = useState(true);
  const history = useHistory();

  return (

    <div className="col-md-5">
      <img className="image" src={image} alt="no file"></img>
      <h2> {name}
        <IconButton color="primary" aria-label="show-summary" onClick={() => setShow(!show)}> {show ? <ExpandLessIcon /> : <ExpandMoreIcon />} </IconButton>
        <IconButton color="primary" aria-label="show-summary" onClick={() => history.push(`/FavoriteMovies/${id}`)}>  <InfoIcon />  </IconButton>

      </h2>


      {show ? <p>{summary}</p> : ""}

      
      <div className="imdb">
        <span><b>IMDd:</b></span>
        <span style={styles}> {rating}</span>
      </div>
      <div className="buttons">

        <IconButton color="primary" aria-label="like" onClick={() => setLike(like + 1)}>
          <Badge badgeContent={like} color="primary">👍</Badge>
        </IconButton>
        <IconButton color="error" aria-label="dislike" onClick={() => setdislike(dislike + 1)}>
          <Badge badgeContent={dislike} color="error">👎</Badge>
        </IconButton>
        {deleteButton}
      </div>

    </div>

  );

}
