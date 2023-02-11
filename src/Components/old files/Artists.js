import React from 'react';
import axios from "axios" 
import { useEffect, useState } from 'react';
import Artist from "./Artist";


const API = process.env.REACT_APP_API_URL

function Artists() {

const[artists, setArtists] = useState([])  //declare state to hold data about Artists that is retrieved from the backend - sql database

useEffect(()=>{ 
    axios
    .get(`${API}/artists`)//getting response back from API
    .then(res => {
        console.log(res.data)
        setArtists(res.data)})  //store response into the state to update Artists 
    .catch(error=> console.log(error)) // catch and console.log any errors
},[])  // this dependency array tells the useEffect to only run once after the Artist component is mounted in the React DOM
// when the useEffect ends with " }, [id]", the useEffect will fire everytime id changes
// this will also cause the page to be rerendered (which means it will run the entire component, rendering the return statement first, then the useEffect) - this should be used in the Show page

    return (
        <div>
            <h1>Artists</h1>
            {
            artists.map((artist) => { 
              return<Artist key={artist.id} artist={artist} />;
              })}
        </div>
    );
}

export default Artists;

// don't need the curly braces in the map since only returning one div  