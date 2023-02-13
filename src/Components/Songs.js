import { useState, useEffect } from "react";
import axios from "axios";
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((response) => setSongs(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div className="songs">
     
      <section className="songsIndex"> <br/> <br/>
        <table className="songsTable">
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Songs;
