import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function ShowMovieList({ name, image, summary, rating, director, cast }) {

  const [like, setLike] = useState(0);
  const [dislike, setdislike] = useState(0);
  const styles = {
    backgroundColor: rating > 8 ? "green" : "orange"
  };
  const [show, setShow] = useState(true);

  return (

    <div className="col-md-5">
      <img className="image" src={image} alt="no file"></img>
      <h2> {name}
        <IconButton color="primary" aria-label="show-summary" onClick={() => setShow(!show)}> {show ? <ExpandLessIcon /> : <ExpandMoreIcon />} </IconButton>
      </h2>


      {show ? <p>{summary}</p> : ""}

      <div className="director">
        <span><b>Director:</b></span>
        <span> {director}</span>
      </div>
      <div className="cast">
        <span><b>Cast:</b></span>
        <span> {cast}.</span>
      </div>
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
      </div>

    </div>

  );

}
