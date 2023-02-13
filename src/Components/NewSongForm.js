import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewSongForm() {
  let navigate = useNavigate();

  const addSong = (newSong) => {
    axios
      .post(`${API}/songs`, newSong)
      .then(
        () => {
          navigate(`/songs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c));
  };

  const [song, setSong] = useState({
    name: '',
    artist: '',
    album: '',
    time: '',
    is_favorite: false
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song);
  };
  return (
    <div className="new">
      <form className="newSongForm"   onSubmit={handleSubmit}>
        <br/><br/>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter name of song"
          required
        /><br/><br/>
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          required
          value={song.artist}
          placeholder="Enter name of artist"
          onChange={handleTextChange}
        /><br/><br/>
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          placeholder="Enter name of album"
          onChange={handleTextChange}
        /><br/><br/>
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="text"
          name="time"
          value={song.time}
          placeholder="Enter length of time"
          onChange={handleTextChange}
        /><br/><br/>
        <label htmlFor="is_favorite">Favorite:</label>
        <br/>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />

        <br/><br/><br/>
        <input type="submit" />
        <br/><br/>
        <Link to={`/songs/`}>
        <button className='cancelNewButton'>Cancel</button>
      </Link>
      </form>
    </div>
  );
}

export default NewSongForm;