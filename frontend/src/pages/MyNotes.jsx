
import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note"
import "../styles/Home.css"

function MyNotes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };


    const groupByDate = (notes) => {
        const grouped = {};
        notes.forEach((note) => {
            const date = new Date(note.timestamp * 1000).toLocaleDateString("en-US");
            if (!grouped[date]) grouped[date] = [];
            grouped[date].push(note);
        });
        return grouped;
    }

    const groupByTime = (notes) => {    
        const grouped = {};
        notes.forEach((note) => {
            const time = new Date(note.timestamp * 1000).toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: false});
            if (!grouped[time]) grouped[time] = [];
            grouped[time].push(note);
        });
        return grouped;
    }

    const groupedNotes = groupByDate(notes);
    console.log(groupedNotes);
    const groupedTime = groupByTime(notes);
    console.log(groupedTime);
    

    return (
        <div>
            <div>
                <h2>Notes</h2>
                {notes.map((note) => (
                    <Note note={note} key={note.id} />
                ))}
            </div>
        </div>
    );
}

export default MyNotes;
