import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note"
import "../styles/Home.css"
import "../styles/Note.css"

function PublicNotes() {
    const [notes, setNotes] = useState([]);
  

    useEffect(() => {
        getPublicNotes();
    }, []);

    const getPublicNotes = () => {
        api
            .get("/api/public-notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
    };



    return (
        <>
            <h2>Public Notes</h2>
            {notes.map((note) => (
                <Note note={note} key={note.id} />
            ))}
        </>
    );
}

export default PublicNotes;