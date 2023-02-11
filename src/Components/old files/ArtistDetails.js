import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
//import Songs from "./Songs";

const API = process.env.REACT_APP_API_URL;

function ArtistDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [artist, setArtist] = useState({});
  const [artistSongs, setArtistSongs] = useState([])
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


 const handleSubmit = (event)=> {
    event.preventDefault()
    setSong({...song, ['artist_id']:id,['artist']: artist.name
    
  })

  axios.post(`${API}/artists/${id}/songs`,song)
    .then((response) => { 
      const newSongs = [...artistSongs, response.data]
      setArtistSongs(newSongs)
   })
   .catch((c) => console.warn("catch", c))
   setSong({
    name: '',
    artist: '',
    album: '',
    time: '',
    is_favorite: false
  })
  }

  const deleteArtist = () => {
  axios
    .delete(`${API}/artists/${id}`)
    .then(
      () => {
        navigate(`/artists`);
      },
      (error) => console.error(error)
    )
    .catch((c) => console.warn("catch", c));
};

const handleDelete = () => {
  // console.log("button clicked");
  deleteArtist()
};


 useEffect(() => {
  axios
  .get(`${API}/artists/${id}`)
  .then((response) => {
    console.log(response.data);
    setArtist(response.data);
  })
  .catch((c) => {
    console.warn("catch", c);
  })

  axios
  .get(`${API}/artists/${id}/songs`)
  .then (response => setArtistSongs(response.data))
  .catch((c) => 
    console.warn("catch", c))
  }, [id]);  
 
  return (
    <article className="showArtistDetails">

    <h6>{artist.name}</h6>
    <h3>{artist.album}</h3>

    <div className="artistNavButtons">
        <div>
          {" "}
          <Link to={`/artists`}><button>Back</button></Link>
        </div>
        <div>
          <Link to={`/artists/${artist.id}/edit`}> <button>Edit</button></Link>
        </div>
        <div>
         <button onClick={handleDelete}>Delete</button>
        </div>
    </div>

    <div className="artistSongs">
      {
        artistSongs.map((song) => {
         return <div>
            <h4>{song.name}</h4>
            <h4>{song.album}</h4>
            <h4>{song.time}</h4>
          </div>
        })
      }
    </div>

    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter name of song"
          required
        />
  
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          placeholder="Enter name of album"
          onChange={handleTextChange}
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="text"
          name="time"
          value={song.time}
          placeholder="Enter length of time"
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />

        <br />
        <input type="submit" />
      </form>

  </article>
);
  }
export default ArtistDetails;


    // <h5>
    //     <span>
    //       <a href={artist.url}>{artist.name}</a>
    //     </span>{" "}
    //     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //     {artist.url}
    // </h5> 



  