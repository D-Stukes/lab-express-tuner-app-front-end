import React from 'react';
import EditSongForm from '../Components/EditSongForm';
import NewSongForm from '../Components/NewSongForm';

function NewOrEdit() {
    return (
        <div>
         <NewSongForm /> 
         <EditSongForm /> 
        </div>
    );
}

export default NewOrEdit;