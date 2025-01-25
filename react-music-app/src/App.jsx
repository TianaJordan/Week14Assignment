import "./App.css";

import Nav from "./components/Navbar";
import SongList from "./components/SongList";
import { defaultSongs } from "./data";

import { Button } from "react-bootstrap";


function App() {
console.log(defaultSongs);

  return (
    <div className="container">
      <Nav />
      <h1>My Playlist</h1>
      <Button className="mt-2 mb-2">Add Song</Button>      <SongList songs={defaultSongs} />
    </div>
  );      
}

export default App