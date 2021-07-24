import React from 'react';
import Card from '../../components/Card/Card';
import { Title } from './styled';
import './homePage.scss';

function HomePage() {
    return (
        <div id="homePageContainer">

            <div>
                <Title>Bloco de notas</Title>
                <form>
                    <input placeholder="Assunto" />
                    <input placeholder="Texto" />
                    <button>CRIAR NOTA</button>
                </form>
            </div>

            <div>
                <Title>Suas notas</Title>

                <Card />
            </div>


        </div>
    )
}
export default HomePage;