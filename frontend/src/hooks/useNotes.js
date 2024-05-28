import { useState, useEffect } from "react";
import api from "../api";

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',  // Ensure this base URL is correct
});

export const fetchNotes = async () => {
    const response = await api.get('/notes/');
    return response.data;
};

export const fetchPublicNotes = async () => {
    const response = await api.get('/public-notes/');
    return response.data;
};

export const createNote = async (noteData) => {
    const response = await api.post('/notes/', noteData);
    return response.data;
};


const useNotes = (apiEndpoint) => {
    const [notes, setNotes] = useState([]);
    const [filteredNotesByDate, setFilteredNotesByDate] = useState([]);
    const [filteredNotesByTime, setFilteredNotesByTime] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api.get(apiEndpoint)
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
            })
            .catch((err) => alert(err));
    };

    const filterNotesByDate = () => {
        const filtered = notes.filter(note => {
            const noteDate = new Date(note.timestamp * 1000).toLocaleDateString("en-US");
            return noteDate === selectedDate;
        });
        setFilteredNotesByDate(filtered);
    };

    const filterNotesByTime = () => {
        const filtered = notes.filter(note => {
            const noteTime = new Date(note.timestamp * 1000).toLocaleTimeString("en-US", {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            });
            return noteTime.startsWith(selectedTime);
        });
        setFilteredNotesByTime(filtered);
    };

    return {
        notes,
        filteredNotesByDate,
        filteredNotesByTime,
        setSelectedDate,
        setSelectedTime,
        filterNotesByDate,
        filterNotesByTime,
    };
};

export default useNotes;
