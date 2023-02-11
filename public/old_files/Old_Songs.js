import React from 'react';
import { useState, useEffect } from 'react';
import ShowOneSong from "./ShowOneSong";
import axios from 'axios'

const API = process.env.REACT_APP_API_URL

const Songs = () => {
    const [songs, setSongs] = useState([])
    useEffect(() => {
        axios.get(`${API}/songs`)
        .then((res) => setSongs(res.data))
        .catch((c) => console.warn("catch", c));
        }, [])
    
    return (
        <div className='songsIndex'> 
        <section>
        <table>
          <thead>
            <tr>
              <th>Songs List</th>
              <th>See details about this Song</th>
              </tr>
          </thead>
          <tbody>
                <tr className='songListHdg'>
                    <td>Song Title</td>
                    <td>Artist</td>
                    <td>Album</td>
                    <td>Favorites  (<span>⭐️</span>) </td> <br/><br/><br/><br/>
                </tr> 
          {songs.map((song) => {
              return <ShowOneSong key={song.id} song={song} />;
            })}
              </tbody>
            </table>
        </section>
        </div>
    );
};

export default Songs;

