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
        putCreateNote(body, getNotes, clear)
    }


    return (
        <div id="homePageContainer">
            <section className="taskSection-leftSide">
                <Title>Bloco de notas</Title>
                <form onSubmit={sendPost}>
                    <input placeholder="Assunto" name={"topic"} onChange={onChange} />
                    <input placeholder="Texto" name={"message"} onChange={onChange} />
                    <button>CRIAR NOTA</button>
                </form>
            </section>
            <section className="taskSection-rightSide">
                <Title>Suas notas</Title>
                <div className="taskContainer">
                    <div className="taskAlign">
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