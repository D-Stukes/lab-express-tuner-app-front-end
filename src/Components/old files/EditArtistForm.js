import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

function EditArtistForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [artist, setArtist] = useState({
    name: '',
    album: ''
  });

  const updateArtist = (updatedArtist) => {
    axios
      .put(`${API}/artists/${id}`, updatedArtist)
      .then(
        () => {
          navigate(`/artists/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c));
  };

  const handleTextChange = (event) => {
    setArtist({ ...artist, [event.target.id]: event.target.value });
  };

  // const handleCheckboxChange = () => {
  //   setArtist({ ...artist, is_favorite: !artist.is_favorite });
  // };

  useEffect(() => {
    axios.get(`${API}/artists/${id}`).then(
      (response) => setArtist(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateArtist(artist, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Artist's Name:</label>
        <input
          id="name"
          value={artist.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of artist"
          required
        />
  
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={artist.album}
          placeholder="name of album"
          onChange={handleTextChange}
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/artists/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default EditArtistForm;
