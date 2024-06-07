import React from "react";
import "../styles/Note.css"

// function Note({ note, onDelete }) {

function Note({ note }) {
    // const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

    // const convertTimestamp = (timestamp) => {
    //     const date = new Date(timestamp * 1000);
    //     const dateString = date.toLocaleDateString("en-US", 
    //         { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'}
    //     );
    //     // const timeString = date.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit'});
    //     const timeString = date.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: false});

    //     return { date: dateString, time: timeString}
    // };

    // const { date, time } = convertTimestamp(note.timestamp);

        const convertTimestamp = (timestamp) => {
            const date = new Date(timestamp * 1000);
            const timeString = date.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: false});
            return timeString;
        };
    
        const time = convertTimestamp(note.timestamp);

    return (

        <>
        <section>

            <div class="my-4">
                
            <div class="border border-grey-100 p-2 rounded-lg">
                <p className="mb-1 note-date">{time}  {note.title}</p>
                <p class="text-center">{note.content}</p>
             </div>
            </div>
            </section>
        </>

// {/* <div class="container mx-auto mt-10 px-4 sm:px-0">
// <div class="max-w 3-xl mx-auto bg-white p-6 rounded-lg shadow-md">
// <div class="flex items-center justify-between mb-4"> */}

//         <div className="note-container">
//             {/* <p className="note-title">{note.title}</p> */}
//             <p className="note-content">{note.content}</p>
//             {/* <p className="note-date">{formattedDate} {convertTimestamp(note.timestamp)}</p> */}
//             <p className="note-date">{date} {time}</p>
//         </div>
//         </div>
//         </div>
//         </div>

    
    );
}

export default Note