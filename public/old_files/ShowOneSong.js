import React from 'react';
import { Link } from 'react-router-dom'


const ShowOneSong = ({song}) => {
    return (
        <>
            <tr className='songList'>
                {/* test */}
                <td className='songName'><Link to={`/songs/${song.id}`}>{song.name}</Link> </td>
                <td className='songArtist'><Link to={`/songs/${song.id}`}> {song.artist} </Link></td>
                <td className='songAlbum'><Link to={`/songs/${song.id}`}> {song.album} </Link></td>
                <td className='songTime'><Link to={`/songs/${song.id}`}> {song.time} </Link></td>
                <td className='song-IsFavorite'>{song.is_favorite  ? (<span>⭐️</span>) : null} </td>
            </tr>  
        </>  
    );
};

export default ShowOneSong;
