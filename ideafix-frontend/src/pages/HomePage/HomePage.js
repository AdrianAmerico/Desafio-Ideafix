import React, { useEffect } from 'react';
import Card from '../../components/Card/Card';
import { Title } from './styled';
import { useGetNotes, putCreateNote } from '../../requests';
import './homePage.scss';
import useForm from '../../hooks/useForm';
import { TextField } from '@material-ui/core';

function HomePage() {

    const { notes, getNotes } = useGetNotes({})
    const { body, onChange, clear } = useForm({ topic: "", message: "" })
    console.log(body)

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
                    <input placeholder="Assunto" name={"topic"} onChange={onChange} autoComplete="off"/>
                    <textarea placeholder="Texto" name={"message"} onChange={onChange} rows="5" autoComplete="off"/>
                    <div>
                        <button>CRIAR NOTA</button>
                    </div>

                </form>
            </section>
            <section className="taskSection-rightSide">

                <div className="taskContainer">
                    <div className="taskAlign">
                        <Title>Suas notas</Title>
                        {notes ? notes.map((note) => {
                            return <Card note={note} key={note.id} getNotes={getNotes} />
                        }) : <p>Carregando</p>}
                    </div>
                </div>
            </section>

        </div>
    )
}
export default HomePage;