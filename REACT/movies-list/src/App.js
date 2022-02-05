import { AddColor } from './AddColor';
import { Link, Switch, Route } from 'react-router-dom'
import { FavoriteMovies } from './FavoriteMovies';
import { TicTacToe } from './TicTacToe';

export default function App() {

  return (
    <div className="App">

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/FavoriteMovies">Favorite Movies</Link>
        </li>

        <li>
          <Link to="/AddColor">Color Game</Link>
        </li>



        <li>
          <Link to="/TicTacToe">XO Gaming</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/FavoriteMovies"><FavoriteMovies /></Route>
        <Route path="/TicTacToe"><TicTacToe /></Route>
        <Route path="/AddColor"><AddColor /></Route>
        <Route path="/">Home</Route>



      </Switch>




    </div>


  );
}

