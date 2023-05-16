import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";

export const CreateNote=({getNote}) =>{
    const [note, setNote] = useState({
        title: '',
        content: ''
    })
    const [inUse, setInUse] = useState(false)
    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target;
        setNote({
            ...note,
            [name]: value,
        })
    }



    const createNote = (e) => {
        e.preventDefault()
        if (note.title.trim() !== '') {
            getNote(note)
            setNote({title: '', content: ''})
        }
    }


    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            createNote(e);
            setInUse(false)
        }
    };


    return (
        <div>
            <form className="create-note" onSubmit={createNote}>
                <input onClick={()=>setInUse(true)}  onChange={handleChange} name="title" placeholder="Title" value={note.title} />
                <textarea onChange={handleChange} onKeyPress={handleKeyPress} name="content" placeholder="Take a note..." hidden={!inUse} rows={inUse?'3':'1'}
                          value={note.content}/>
                <button onClick={()=>setInUse(false)} hidden={!inUse} type='submit'>
                    <AddIcon />
                </button>
            </form>
        </div>
    );
}
