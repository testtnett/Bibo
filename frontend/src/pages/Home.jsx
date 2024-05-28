
import { useState, useEffect } from "react";
import api from "../api";
// import Note from "../components/Note"
import "../styles/Home.css"

function Home() {
    // const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [charCount, setCharCount] = useState(0);

    // useEffect(() => {
    //     getNotes();
    // }, []);

    // const getNotes = () => {
    //     api
    //         .get("/api/notes/")
    //         .then((res) => res.data)
    //         .then((data) => {
    //             setNotes(data);
    //             console.log(data);
    //         })
    //         .catch((err) => alert(err));
    // };

    // const deleteNote = (id) => {
    //     api
    //         .delete(`/api/notes/delete/${id}/`)
    //         .then((res) => {
    //             if (res.status === 204) alert("Note deleted!");
    //             else alert("Failed to delete note.");
    //             getNotes();
    //         })
    //         .catch((error) => alert(error));
    // };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) alert("Note created!");
                else alert("Failed to make note.");
                getNotes();
            })
            .catch((err) => alert(err));
    };

    // const groupByDate = (notes) => {
    //     const grouped = {};
    //     notes.forEach((note) => {
    //         const date = new Date(note.timestamp * 1000).toLocaleDateString("en-US");
    //         if (!grouped[date]) grouped[date] = [];
    //         grouped[date].push(note);
    //     });
    //     return grouped;
    // }

    // const groupByTime = (notes) => {    
    //     const grouped = {};
    //     notes.forEach((note) => {
    //         const time = new Date(note.timestamp * 1000).toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: false});
    //         if (!grouped[time]) grouped[time] = [];
    //         grouped[time].push(note);
    //     });
    //     return grouped;
    // }

    // const groupedNotes = groupByDate(notes);
    // console.log(groupedNotes);
    // const groupedTime = groupByTime(notes);
    // console.log(groupedTime);
    

    return (
        <>
            {/* <div>
                <h2>Notes</h2>
                {notes.map((note) => (
                    <Note note={note} onDelete={deleteNote} key={note.id} />
                ))}
            </div> */}
            
        <div class="flex flex-col min-h-screen bg-gray-100 font-sans antialised">
        <div class="flex-grow container mx-auto mt-10px-4 sm:px:0">
        <div class="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col">
            <div class="text-center">
                <br/>
                <br/>
                <h2 class="text-2xl font-semibold mb-4">Edge Esmeralda Diary</h2>
                {/* <p class="text-gray-700">
                    (This is a simple AI blog generator that uses OpenAI's GPT-3 to generate blog posts. 
                    To get started, click the button below to generate a blog post.)
                    Generate high quality blog articles form YouTube videos using AI. Simply paste the URL of the video and get a blog post in seconds.
                </p> */}
            </div>
            <br />

            <div>
            {/* <h2 class="text-xl mb-4 font-semibold text-center">Create a Note</h2> */}
            <form onSubmit={createNote}>
                {/* <label htmlFor="title">Describe Your Surroundings</label> */}
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    class="mb-4 flex-grow p-2 border border-blue-400 rounded-l-md"
                    placeholder="Describe your surroundings in a few words"
                    maxLength={80}

                />
                {/* <label htmlFor="content">Content:</label> */}
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => {
                        setContent(e.target.value);
                        setCharCount(e.target.value.length);
                    }}
                    class="mb-4  p-2 border border-blue-400 rounded-l-md h-80 w-full"
                    placeholder="Write your thoughts here..."
                    maxLength="800"
                    // class="mt-10 flex-grow mt-2 text-gray-700 space-y-4"
                ></textarea>
                <p>{charCount}/800</p>

                {/* <p>Character count: {charCount}</p> */}
                <br />
                <input type="submit" value="Publish" 
                class="mb-4 bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                </input>
            </form>

        </div>
        </div>
        </div>
        </div>

        </>
    );
}

export default Home;
