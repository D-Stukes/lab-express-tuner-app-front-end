import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SongForm(props) {
  const { id } = useParams();
  const { songDetails } = props;

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: "",
    artist_id: id,
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (songDetails) {
      setSong(songDetails);
    }
  }, [id, songDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleAdd(song, id);
    if (songDetails) {
      props.toggleView();
    }
    setSong({
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
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Song name"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          required
          value={song.artist}
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          value={song.album}
          onChange={handleTextChange}
        />
        <label htmlFor="Time">Time:</label>
        <textarea
          id="time"
          type="text"
          name="time"
          value={song.time}
          placeholder="Duration time"
          onChange={handleTextChange}
        />
        <br />

        
        
        <input type="submit" />
      </form>
    </div>
  );
}

export default SongForm;