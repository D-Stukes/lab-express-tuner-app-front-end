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
      {/* {viewEditForm ? (
        <SongForm
          songDetails={song}
          toggleView={toggleView}
          handleEdit={handleEdit}
        />
      ) : (
        <>
          <h4>Song: {name} </h4>
          <p>Artist: {artist}</p>
          <p>Album: {album}</p>
          <p>Time: {time}</p>
          <p>{is_favorite}</p>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </>
      )}
      <button onClick={toggleView}>Edit</button> */}
    </div>
  );
}

export default Song;