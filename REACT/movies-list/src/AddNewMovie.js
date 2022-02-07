import { useState } from 'react';
import { useHistory} from  'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

export function AddNewMovie({ value,setvalue}) {

  // useStates for name,image,summary,rating...
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const history = useHistory();
  return (
    <div className="addnew-movie">

      <h3 className="addtext">Add your favorite movie</h3>
      <form>
        <TextField id="name" label="Enter Movie name" onChange={(event) => setName(event.target.value)} variant="standard" />
        <TextField id="image" label="Enter poster link" onChange={(event) => setImage(event.target.value)} variant="standard" />
        <TextField id="summary" label="Enter summary" onChange={(event) => setSummary(event.target.value)} variant="standard" />
        <TextField id="rating" label="Enter rating" onChange={(event) => setRating(event.target.value)} variant="standard" />
       

        <Button variant="outlined" id="addbutton" color="success"
          onClick={() => {
            const newmovie = {
              name: name,
              image: image,
              summary: summary,
              rating: rating,
             
            };

            // Rejecting the movie if it already exists...
            for (let i = 0; i < value.length; i++) {
              if (document.getElementById('name') != null)
                if (value[i].name === document.getElementById('name').value) {
                  alert("Movie already exist");
                  return;
                }
            }
            //Movie name should be given else alert
            if (newmovie.name === "") {
              alert("Movie cannot be empty");
              return;
            }

            setvalue([...value, newmovie]);
            history.push("/FavoriteMovies");
            <Alert severity="success">Added successfully</Alert>;


            if (document.getElementById('name') != null)
              document.getElementById('name').value = "";
            if (document.getElementById('image') != null)
              document.getElementById('image').value = "";
            if (document.getElementById('summary') != null)
              document.getElementById('summary').value = "";
            if (document.getElementById('rating') != null)
              document.getElementById('rating').value = "";

            setName("");
            setImage("");
            setSummary("");
            setRating("");

          }}>Add Movie to the list</Button>

      </form>
    </div>

  );
}
