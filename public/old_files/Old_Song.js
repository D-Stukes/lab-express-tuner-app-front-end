import { Link } from "react-router-dom";

function Song ({song}) {
  return (
    <tr>
       <td>
        {bookmark.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
{/* 
  *** May add this later ***
      <td>
        <a href={song.url} target="_blank" rel="no song">
          {song.name}
        </a>
      </td> */}
      <td>
        <Link to={`/songs/${song.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Song;
