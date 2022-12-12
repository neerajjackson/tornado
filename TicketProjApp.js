import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import {MovieContext} from './MovieContext'
import MovieList from './movielist'

import AddMovie from "./AddMovie";
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
