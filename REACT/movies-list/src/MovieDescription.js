import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useParams, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

export function MovieDescription({ value }) {
  const { id } = useParams();
  console.log(id, value);
  const movie = value[id];
  const history = useHistory();
  return (
    <div>
      <iframe
        width="100%"
        height="409"
        className="movie-video"
        src={movie.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>

      </iframe>

      <div className="movie-description">
        <div className="movie-specs">
          <h3 className="movie-name">{movie.name}</h3>
          <p className="movie-rating">⭐{movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button variant="outlined" onClick={() => history.goBack()} startIcon={<ArrowBackIosIcon />}>Back</Button>
      </div>

    </div>
  );
}
