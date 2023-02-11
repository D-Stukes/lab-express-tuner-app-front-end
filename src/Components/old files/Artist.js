import React from 'react';
import { Link } from 'react-router-dom'

function Artist({artist}) {
    return (
        <div>
            <h3>Artist: {artist.name}</h3>
              <h3>Album: {artist.album}</h3>
              <h3><Link to={`/artists/${artist.id}`}>✏️<h4>View/Edit</h4></Link></h3>
              {/* <p><Link to={`/artists/${artist.id}`}>{artist.album}</Link></p> */}
        </div>
    );
}

export default Artist;