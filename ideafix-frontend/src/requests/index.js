import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import { useState } from 'react';

export const request = {
    putCreateNote: (body, clear) => {
        axios.put(`${BASE_URL}/task/create`, body)
            .then((res) => {
                console.log(res)
                clear()
            })
            .catch((err) => {
                console.log(err)
            })
    },
}


export function useGetNotes() {
    const [notes, setNotes] = useState([])
    console.log(notes)

    const getNotes = () => {
        axios.get(`${BASE_URL}/task/all`)
            .then((res) => {
                setNotes(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    return { notes, getNotes }
}



export function putCreateNote(body, getNotes, clear) {
    axios.put(`${BASE_URL}/task/create`, body)
        .then((res) => {
            console.log(res)
            clear()
            getNotes()
        })
        .catch((err) => {
            console.log(err.response)
        })
}

export function deleteTasks(id, getNotes) {
    axios.delete(`${BASE_URL}/task/delete/${id}`)
        .then((res) => {
            alert("Task apagada")
            getNotes()
        })
        .catch((err) => {
            console.log(err.response)
        })
}

