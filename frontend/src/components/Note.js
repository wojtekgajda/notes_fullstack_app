import React, {useState} from "react";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';


export const Note = (props) => {
    const [editing, setEditing] = useState(false)
    const [editedNote, setEditedNote] = useState({
        title: props.title,
        content: props.content
    })

    const handleEdit = (e) => {
        e.preventDefault()
        setEditing(!editing)
    }

    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target;
        setEditedNote({
            ...editedNote,
            [name]: value
        })
    }

    const handleSave =()=>{
        props.edit(editedNote, props.id)
        setEditing(!editing)
    }


    const immutable = (
        <div className="note ">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => props.deleteNote(props.id)}>
                <RemoveCircleIcon/>
            </button>
            <button onClick={handleEdit}>
                <EditIcon/>
            </button>
        </div>)

    const mutable = (
        <div className="note mutableNote">
            <input onChange={handleChange} name='title' defaultValue={editedNote.title || props.title}/>
            <textarea onChange={handleChange} name='content' defaultValue={editedNote.content|| props.content}/>
            <button onClick={handleSave}>
                <SaveIcon/>
            </button>
        </div>)

    return (
        <>
            {editing ? mutable : immutable}
        </>

    );
}


