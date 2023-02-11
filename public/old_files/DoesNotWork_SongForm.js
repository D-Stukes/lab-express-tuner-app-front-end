

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// purposely using the word props now so i can distinguish between handleEdit and handleAdd
function SongForm(props) {
  const { id } = useParams();
  const { songDetails } = props;

  const [newOrUpdatedSong, setNewOrUpdatedSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: "",
    artist_id: id,
  });

  const handleTextChange = (event) => {
    setNewOrUpdatedSong({
      ...newOrUpdatedSong,
      [event.target.id]: event.target.value,
    });
  };

  const handleCheckboxChange = () => {
    setNewOrUpdatedSong({ ...setNewOrUpdatedSong, is_favorite: !setNewOrUpdatedSong.is_favorite });
  };

  useEffect(() => {
    if (songDetails) {
      setNewOrUpdatedSong(songDetails);
    }
  }, [id, songDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    //if there are songDetails, it means that we are editing, otherwise we are creating a new song.
    // here we are now using the actual function names instead of handleSubmit for both functions
    if (songDetails) {
      props.handleEdit(newOrUpdatedSong, id);
    } else {
      props.handleAdd(newOrUpdatedSong);
    }

    //after i submit, toggle this view back to displaying the song
    if (songDetails) {
      props.toggleView();
    }
    setNewOrUpdatedSong({
      name: "",
      artist: "",
      album: "",
      time: "",
      is_favorite: "",
      artist_id: id,
    });
  };
  return (
    <div className="Edit">
      {props.children}
      <form onSubmit={handleSubmit}>
        <label htmlFor="editedSong">Name:</label>
        <input
          id="editedSong"
          value={newOrUpdatedSong.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of song"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          required
          value={newOrUpdatedSong.artist}
          placeholder="Name of artist"
          onChange={handleTextChange}
        />
      
        <label htmlFor="album">Song:</label>
        <textarea
          id="album"
          type="text"
          name="album"
          value={newOrUpdatedSong.album}
          placeholder="Name of album"
          onChange={handleTextChange}
        />

        <br />

        <label htmlFor="time">Song:</label>
        <textarea
          id="time"
          type="text"
          name="time"
          value={newOrUpdatedSong.time}
          placeholder="Length of song"
          onChange={handleTextChange}
        />

        <br />

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
    </div>
  );
}

export default SongForm;