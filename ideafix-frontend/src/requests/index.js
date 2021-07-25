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
    deleteNote: (id) => {
        axios.delete(`${BASE_URL}/task/${id}`)
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