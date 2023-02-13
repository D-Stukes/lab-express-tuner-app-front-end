import React from 'react'
import { Link } from "react-router-dom"


function Navbar() {
    return (
        <nav className ="navbar">
            <span> <Link className='homeLink' to="/">Home</Link></span> 
            <h1> <Link className='songsLinkHdg' to="/songs">Tuner App Songs List</Link></h1>   
            <button className='newSongButton'> <Link className='newSongLink' to="/songs/new">New Song</Link> </button>
           
        </nav> 
    )
}

export default Navbar

