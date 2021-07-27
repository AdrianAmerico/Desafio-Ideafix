import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import { useState } from 'react';

export function useGetNotes() {
    const [notes, setNotes] = useState([])

    const getNotes = () => {
        axios.get(`${BASE_URL}/task/all`)
            .then((res) => {
                setNotes(res.data)
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }
    return { notes, getNotes }
}

export function putCreateNote(body, getNotes, clear) {
     axios.put(`${BASE_URL}/task/create`, body)
        .then((res) => {
            clear()
            getNotes()
        })
        .catch((err) => {
            console.log(err.message)
        })
}

export function deleteTasks(id, getNotes) {
    axios.delete(`${BASE_URL}/task/delete/${id}`)
        .then((res) => {
            alert("Task apagada")
            getNotes()
        })
        .catch((err) => {
            alert(err.response)
        })
}