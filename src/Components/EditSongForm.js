import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

function EditSongForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [song, setSong] = useState({
    name: '',
    artist: '',
    album: '',
    time: '',
    is_favorite: false
  });

  const updateSong = (updatedSong) => {
    axios
      .put(`${API}/songs/${id}`, updatedSong)
      .then(
        () => {
          navigate(`/songs/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/songs/${id}`).then(
      (response) => setSong(response.data),
      

      (error) => navigate(`/not-found`)
      
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song, id);
    
  };

  
  return (
    <div className="Edit">
      <form  className='editForm' onSubmit={handleSubmit}>
        <br/>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of song"
          required
        /><br/><br/>
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          required
          value={song.artist}
          placeholder="enter name of artist"
          onChange={handleTextChange}
        /><br/><br/>
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          placeholder="name of album"
          onChange={handleTextChange}
        /><br/><br/>

        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="text"
          name="time"
          value={song.time}
          placeholder="enter length of time"
          onChange={handleTextChange}
        />  <br/><br/>    

        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />

        <br/><br/>

        <input type="submit" /> <br/>
        <Link to={`/songs`}>
        <button className='cancelEditButton'>Cancel Edit</button>
      </Link>
      </form>
     
    </div>
  );
}


export default EditSongForm;
