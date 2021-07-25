import React, { useEffect } from 'react';
import Card from '../../components/Card/Card';
import { Title } from './styled';
import { useGetNotes, request, putCreateNote } from '../../requests';
import './homePage.scss';
import useForm from '../../hooks/useForm';

function HomePage() {

    const { notes, getNotes } = useGetNotes({})
    const { body, onChange, clear } = useForm({ topic: "", message: "" })
    console.log(body)

    useEffect(() => {
        getNotes()
    }, [])

    const sendPost = (event) => {
        event.preventDefault()
        putCreateNote(body,getNotes, clear)
    }


    return (
        <div id="homePageContainer">

            <div>
                <Title>Bloco de notas</Title>

                <form onSubmit={sendPost}>
                    <input placeholder="Assunto" name={"topic"} onChange={onChange}/>
                    <input placeholder="Texto" name={"message"} onChange={onChange}/>
                    <button>CRIAR NOTA</button>
                </form>
            </div>

            <div>
                <Title>Suas notas</Title>
                {notes ? notes.map((note) => {
                    return <Card note={note} key={note.id} getNotes={getNotes} />
                }) : <p>Carregando</p>}
            </div>
        </div>
    )
}
export default HomePage;