import React from "react";
import "../styles/Note.css"

// function Note({ note, onDelete }) {

function Note({ note }) {
    // const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

    const convertTimestamp = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const dateString = date.toLocaleDateString("en-US", 
            { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'}
        );
        // const timeString = date.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit'});
        const timeString = date.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: false});

        return { date: dateString, time: timeString}
    };

    const { date, time } = convertTimestamp(note.timestamp);

    return (
        <div className="note-container">
            {/* <p className="note-title">{note.title}</p> */}
            <p className="note-content">{note.content}</p>
            {/* <p className="note-date">{formattedDate} {convertTimestamp(note.timestamp)}</p> */}
            <p className="note-date">{date} {time}</p>
        </div>
    );
}

export default Note