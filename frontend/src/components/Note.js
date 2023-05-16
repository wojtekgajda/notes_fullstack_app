import React from "react";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
export const Note=(props)=>{
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => props.deleteNote(props.id)}>
                <RemoveCircleIcon/>
            </button>
        </div>
    );
}


