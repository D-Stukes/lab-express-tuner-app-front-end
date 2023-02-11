import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
//import Reviews from "./Reviews";
const API = process.env.REACT_APP_API_URL;

function SongDetails() {
  const [song, setSong] = useState({});
  let { id } = useParams();

  let navigate = useNavigate();

const deleteSong = () => {
  axios
    .delete(`${API}/songs/${id}`)
    .then(
      () => {
        navigate(`/songs`);
      },
      (error) => console.error(error)
    )
    .catch((c) => console.warn("catch", c));
};
const handleDelete = () => {
  console.log("button clicked");
  deleteSong()
};


useEffect(() => {
  axios
  .get(`${API}/songs/${id}`)
  .then((response) => {
    console.log("response data - frontend= ",response.data);
    setSong(response.data);
  })
  .catch((c) => {
    console.warn("catch", c);
  });
  }, [id, API]);

  return (
    <article className="showSongDetails">
    <h3>
        {song.is_favorite ? <span>⭐️</span> : null} {song.name}
    </h3>

    <h6>{song.name}</h6>
    <h3>{song.artist}</h3>
    <h3>{song.album}</h3>
    <h3>{song.time}</h3>

    <div className="songNavButtons">
        <div>
          {" "}
          <Link to={`/songs`}><button>Back</button></Link>
        </div>
        <div>
          <Link to={`/songs/${id}/edit`}> <button>Edit</button></Link>
        </div>
        <div>
         <button onClick={handleDelete}>Delete</button>
        </div>
    </div>
  </article>
);
  }
export default SongDetails;


    // <h5>
    //     <span>
    //       <a href={song.url}>{song.name}</a>
    //     </span>{" "}
    //     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //     {song.url}
    // </h5> 



  