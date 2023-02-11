
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// using the "props" in order to distinguish between handleEdit and handleAdd
function SongForm(props) {
  const { id } = useParams();
  const { songDetails } = props;
  const [newSong, setNewSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: "",
    artist_id: id,
  });
  const [editedSong, setEditedSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: "",
    artist_id: id,
  });

  const handleTextChangeNew = (event) => {
    setNewSong({
      ...newSong,
      [event.target.id]: event.target.value,
    });
  };
  const handleTextChangeEdit = (event) => {
    setEditedSong({
      ...editedSong,
      [event.target.id]: event.target.value,
    });
  };

  const handleCheckboxChangeNew = () => {
    setNewSong({ ...newSong, is_favorite: !newSong.is_favorite });
  };
  const handleCheckboxChangeEdit = () => {
    setEditedSong({ ...editedSong, is_favorite: !editedSong.is_favorite });
  };



  useEffect(() => {
    if (songDetails) {
      setEditedSong(songDetails);
    }
    else setNewSong(songDetails);
  }, [id, songDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    //if there are songDetails, it means that we are editing, otherwise we are creating a new song.
    // here we are now using the actual function names instead of handleSubmit for both functions
    // if (songDetails) {
    //   props.handleEdit(editedSong, id);
    // } else {
    //   props.handleAdd(newSong);
    // }
//no handleAdd or handleEdit in above code???

if (songDetails) {
  props.handleChangeTextEdit(editedSong, id);
} else {
  props.handleChangeTextNew(newSong);
}

    //after i submit, toggle this view back to displaying the song
    if (songDetails) {
      props.toggleView();
    }
    //Why are these values being reset?
    // setNewOrUpdatedSong({
    //   name: "",
    //   artist: "",
    //   album: "",
    //   time: "",
    //   is_favorite: "",
    //   artist_id: id,
    // });
  };
  return (
    <div 
    
    

    className="Edit">
      {props.children}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={editedSong.name}
          type="text"
          onChange={handleTextChangeEdit}
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
          checked={newOrUpdatedSong.is_favorite}
        />

        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default SongForm;