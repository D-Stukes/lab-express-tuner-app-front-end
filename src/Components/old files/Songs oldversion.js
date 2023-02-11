//import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Song from "./Song";
//import SongForm from "./SongForm"
import axios from 'axios'

const API = process.env.REACT_APP_API_URL

function Songs() {
  const [songs, setSongs] = useState([]);
  const { id } = useParams();

  const handleAdd = (newSong) => {
    axios
      .post(`${API}/artists/${id}/songs`, newSong)
      .then(
        (response) => {
          setSongs([response.data, ...songs]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleEdit = (updatedSong, id) => {
    axios
      .put(`${API}/artists/${id}/songs/${updatedSong.id}`, updatedSong)
      .then((response) => {
        const copySongArray = [...songs];
        const indexUpdatedSong = copySongArray.findIndex((song) => {
          return song.id === updatedSong.id;
        });
        copySongArray[indexUpdatedSong] = response.data;
        setSongs(copySongArray);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API}/artists/${id}/songs/${id}`)
      .then(
        (response) => {
          const copySongArray = [...songs];
          const indexDeletedSong = copySongArray.findIndex((song) => {
            return song.id === id;
          });
          copySongArray.splice(indexDeletedSong, 1);
          setSongs(copySongArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

    useEffect(() => {
    axios.get(`${API}/artists/${id}/songs`).then((response) => {
      console.log(response.data);
      setSongs(response.data);
    });
  }, [id]);
    
    return (

<section className="Songs">
      <h2>Songs</h2>
      <SongForm handleAdd={handleAdd}>
        <h3>Add a New Song</h3>
      </SongForm>
      {songs.map((song) => (
        <Song
          key={song.id}
          song={song}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </section>
    );
};

export default Songs;

