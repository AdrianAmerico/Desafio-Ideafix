import React, { useEffect } from 'react';
import Card from '../../components/Card/Card';
import { Title } from './styled';
import { useGetNotes, putCreateNote } from '../../requests';
import './homePage.scss';
import useForm from '../../hooks/useForm';
import NoteError from '../../components/NoteError/NoteError';

function HomePage() {

    const { notes, getNotes } = useGetNotes()
    const { body, onChange, clear } = useForm({ topic: "", message: "" })
    console.log(notes)
    useEffect(() => {
        getNotes()
    }, [])

    const sendPost = (event) => {
        event.preventDefault()
        putCreateNote(body, getNotes, clear)
    }

    return (
        <div id="homePageContainer">
            <section className="taskSection-leftSide">
                <Title>Bloco de notas</Title>
                <form onSubmit={sendPost} className="formSection">
                    <input placeholder="Assunto" value={body.topic} name={"topic"} onChange={onChange} autoComplete="off" required />
                    <textarea placeholder="Texto" value={body.message} name={"message"} onChange={onChange} rows="5" autoComplete="off" required />
                    <div>
                        <button>CRIAR NOTA</button>
                    </div>
                </form>
            </section>

            <section className="taskSection-rightSide">
                <div className="taskContainer">
                    <div className="taskAlign">
                        <div className="titleAlign">
                            <Title>Suas notas</Title>
                        </div>
                        {notes?.length ? notes.map((note) => {
                            return <Card note={note} key={note.id} getNotes={getNotes} />
                        }) : <NoteError />}
                    </div>
                </div>
            </section>

        </div>
    )
}
export default HomePage;