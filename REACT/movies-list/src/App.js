import {useState} from 'react';

export default function App() {
  
  const [value , setvalue] = useState([
    {
      name: "The Shawshank Redemption",
      image: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      summary:"Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.",
      rating: "9.3",
      director: "Frank Darabont",
      cast:"	Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler"
    },
    {
      name: "Hacksaw Ridge",
      image: "https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_.jpg",
      summary:"The true story of Pfc. Desmond T. Doss (Andrew Garfield), who won the Congressional Medal of Honor despite refusing to bear arms during WWII on religious grounds. Doss was drafted and ostracized by fellow soldiers for his pacifist stance but went on to earn respect and adoration for his bravery,",
      rating: "8.1",
      director: " Mel Gibson",
      cast:"	Andrew Garfield, Richard Pyros, Jacob Warner, 	Darcy Bryce, 	Roman Guerriero"
    },
    {
      name: "Schindler's List",
      image: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      summary:"Oskar Schindler, a German industrialist and member of the Nazi party, tries to save his Jewish employees after witnessing the persecution of Jews in Poland.",
      rating: "8.9",
      director: "Steven Spielberg",
      cast:"Liam Neeson, Ben Kingsley, Ralph Fiennes, Caroline Goodall, Jonathan Sagall"
    },
    {
      name: "The Social Network",
      image: "https://ogden_images.s3.amazonaws.com/www.lockhaven.com/images/2021/05/19143504/social-network-592x840.jpg",
      summary:"Mark Zuckerberg creates a social networking site, Facebook, with his friend Eduardo's help. Though it turns out to be a successful venture, he severs ties with several people along the way.",
      rating: "7.7",
      director: "David Fincher",
      cast:"Jesse Eisenberg, Andrew Garfield, Armie Hammer,Justin Timberlake, Max Minghella"
    },
    {
      name: "The Founder",
      image: "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/the-founder-poster0.jpg?itok=SyQ7NUTA",
      summary:"Ray, a salesman, meets the owners of McDonald's, a burger joint in Southern California. He realises the potential of the place and decides to make it the biggest restaurant business in the world.",
      rating: "7.2",
      director: "John Lee Hancock",
      cast:"Michael Keaton, Nick Offerman, 	John Carroll Lynch, Linda Cardellini, B.J. Novak"
    },
    {
      name: "The Big Short",
      image: "https://m.media-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTgtNThlY2UxZWMzNjdkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_FMjpg_UX1000_.jpg",
      summary:"In the mid-2000s, a few finance experts observe the instability in the US housing market and predict its collapse. Through their research, they discover the flaws and corruption in the system.",
      rating: "7.8",
      director: "Adam McKay",
      cast:"	Ryan Gosling, Rudy Eisenzopf, 		Casey Groves, 	Charlie Talbert, Harold Gervais"
    }
  ]);
  console.log(value)
  const newmovie = {}
  console.log(newmovie);
 
  return (
    <div className="App">
      <h1>Favorite Movies</h1>
      <div className="container">
        <div className="row">
      {value.map((nm) => (

        <ShowMovieList key = {nm.name} name={nm.name} image={nm.image} summary={nm.summary} rating={nm.rating} director ={nm.director} cast ={nm.cast}/>
      ))}
      </div>
    </div>
    <div className="addnew-movie">
    
    <h3 className = "addtext">Add your favorite movie</h3>
    <form>
      <input type="text" id ="name" required onChange = {(event) => newmovie.name = `${event.target.value}`} placeholder="Enter Movie name"></input><br></br>
     <input type = "text" id = "image" onChange = {(event) => newmovie.image =`${event.target.value}`} placeholder="Enter poster link"></input><br></br>
      <input type = "text"  id ="summary" onChange = {(event) => newmovie.summary = `${event.target.value}`} placeholder="Enter summary"></input><br></br>
      <input type = "text" id = "rating" onChange = {(event) => newmovie.rating = `${event.target.value}`} placeholder="Enter rating"></input><br></br>
      <input type="text" id = "director" onChange = {(event) => newmovie.director =`${event.target.value}`} placeholder="Enter director name"></input><br></br>
      <input type = "text" id = "cast" onChange = {(event) => newmovie.cast = `${event.target.value}`} placeholder="Enter cast details"></input><br></br>
     
      <button type="button" id ="addbutton"  className = "btn btn-success" onClick = {()=>{
        if(document.getElementById('name') != null)
          newmovie.name = document.getElementById('name').value;
        if(document.getElementById('image') != null)
          newmovie.image = document.getElementById('image').value;
        if(document.getElementById('summary') != null)
          newmovie.summary = document.getElementById('summary').value;
        if(document.getElementById('rating') != null)
          newmovie.rating = document.getElementById('rating').value;
        if(document.getElementById('director') != null)
          newmovie.director = document.getElementById('director').value;
          if(document.getElementById('cast') != null)
          newmovie.cast = document.getElementById('cast').value;

        // Rejecting the movie if it already exists...
        for(let i = 0; i < value.length; i ++) {
          if(document.getElementById('name') != null)
           if(value[i].name === document.getElementById('name').value ){
             alert("Movie already exist");
             return;
           }
        } 

        setvalue([...value, newmovie]);


        if(document.getElementById('name') != null)
          document.getElementById('name').value = "";
        if(document.getElementById('image') != null)
          document.getElementById('image').value = "";
        if(document.getElementById('summary') != null)
          document.getElementById('summary').value = "";
        if(document.getElementById('rating') != null)
          document.getElementById('rating').value = "";
        if(document.getElementById('director') != null)
          document.getElementById('director').value = "";
        if(document.getElementById('cast') != null)
         document.getElementById('cast').value = "";
      }
      }> Add Movie to the list</button>

    </form>
    </div>
    </div>
  );
}

function ShowMovieList({ name, image , summary, rating, director, cast }) {

  const [like, setLike] = useState(0);
  const [dislike, setdislike] = useState(0);
  const styles ={
    backgroundColor: rating > 8 ? "green" : "orange"
  };
  
  return (
    
      <div className="col-md-5">
      <img className="image" src={image} alt="no file"></img>
      <h1> {name} </h1>
      <h4 className="summary-text">Summary</h4>
      <p className="summary">{summary}</p>
      <div className="director">
        <span ><b>Director:</b></span>
        <span> {director}</span>
      </div>
      <div className="cast">
        <span ><b>Cast:</b></span>
        <span> {cast}.</span>
      </div>
      <div className="imdb">
        <span ><b>IMDd:</b></span>
        <span style = {styles}> {rating}</span>
      </div>
      <div className="buttons">
        <button className="btn btn-primary"onClick = {()=>setLike(like+1)}>👍{like}</button>
        <button className= "btn btn-danger" onClick = {()=>setdislike(dislike+1)}>👎{dislike}</button>
      </div>
      
      </div>
      
  );
  
}

