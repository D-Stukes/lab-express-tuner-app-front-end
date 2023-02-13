import { Link } from "react-router-dom";
// import { useState } from "react";
// import SongForm from "./SongForm";

function Song({ song, handleDelete, handleEdit }) {
  // const [viewEditForm, toggleEditForm] = useState(false);

  // const toggleView = () => {
  //   toggleEditForm(!viewEditForm);
  // };

  // const { name, artist, album, time, is_favorite, id } = song;
  return (
    <div className="Song">
<tr>
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={song.url} target="_blank" rel="noreferrer">
          {song.name}
        </a>
      </td>
      <td>
        {/* <Link to={`/songs/${song.id}`}>✏️</Link> */}
        <Link to={`/songs/${song.id}`}>🎸</Link>
      </td>
    </tr>
    </div>
  );
}

export default Song;