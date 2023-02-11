import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function NewArtistForm() {
  let navigate = useNavigate();

  const addArtist = (newArtist) => {
    axios
      .post(`${API}/artist`, newArtist)
      .then(
        () => {
          navigate(`/artist`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c));
  };

  const [artist, setArtist] = useState({
    name: '',
    album: ''
  });

  const handleTextChange = (event) => {
    setArtist({ ...artist, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setArtist({ ...artist, is_favorite: !artist.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addArtist(artist);
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={artist.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter name of artist"
          required
        />
       
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={artist.album}
          placeholder="Enter name of album"
          onChange={handleTextChange}
        />
       
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewArtistForm;
