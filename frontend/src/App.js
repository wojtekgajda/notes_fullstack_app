import React, {useState, useEffect} from "react";
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import {Note} from "./components/Note";
import {CreateNote} from "./components/CreateNote";
import axios from 'axios';


export const App = () => {
    const [notes, setNotes] = useState([])

    const getNote = (note) => {
        console.log(note)
        axios.post('http://localhost:3001/api/notes', note).then((response)=>{
            const newNote = response.data
            setNotes((prevState) => [...prevState, newNote])
        }).catch((error=>{
            console.log(error)
        }))

    }

    const deleteItem = (id) => {
        axios.delete(`http://localhost:3001/api/notes/${id}`).then(()=>{
            console.log(`Post id: ${id} deleted`)
            setNotes((prevState) => {
                return prevState.filter((item) => item._id !== id)
            })
        })
    }

    const fetchNotes=()=>{
        axios.get('http://localhost:3001/api/notes').then((response)=>{
            setNotes(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
       fetchNotes()
    },[])


    return (
        <>
            <Header/>
            <CreateNote getNote={getNote}/>
            {notes.map((note) => {
                return (
                    <Note deleteNote={deleteItem} key={note._id} id={note._id} title={note.title} content={note.content}/>
                )
            })}
            <Footer/>
        </>
    )
}

