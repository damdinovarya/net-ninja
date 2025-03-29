import { useEffect, useState } from 'react';
import './App.css'
import { Card } from './helpers/types';
import SingleCard from './components/SingleCard';

const cardImages = [
    { "src": "/img/helmet-1.png" },
    { "src": "/img/potion-1.png" },
    { "src": "/img/ring-1.png" },
    { "src": "/img/scroll-1.png" },
    { "src": "/img/shield-1.png" },
    { "src": "/img/sword-1.png" },
];

// const endgameTemp: Card[] = [
//     { "src": "/img/endgame.jpg", id: 0, matched: true },
//     { "src": "/img/endgame.jpg", id: 1, matched: true },
//     { "src": "/img/endgame.jpg", id: 2, matched: true },
//     { "src": "/img/endgame.jpg", id: 3, matched: true },
//     { "src": "/img/endgame.jpg", id: 4, matched: true },
//     { "src": "/img/endgame.jpg", id: 5, matched: true },
//     { "src": "/img/endgame.jpg", id: 6, matched: true },
//     { "src": "/img/endgame.jpg", id: 7, matched: true },
//     { "src": "/img/endgame.jpg", id: 8, matched: true },
//     { "src": "/img/endgame.jpg", id: 9, matched: true },
//     { "src": "/img/endgame.jpg", id: 10, matched: true },
//     { "src": "/img/endgame.jpg", id: 11, matched: true }
// ]

function App() {

    const [cards, setCards] = useState<Card[]>([]);
    const [matches, setmatches] = useState(0);
    const [choiceOne, setChoiceOne] = useState<Card | null>(null);
    const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
    const [disabled, setDisabled] = useState(false);

    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setDisabled(false);
    }

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random(), matched: false }));

        resetTurn();
        setCards(shuffledCards);
        setmatches(0);
    }

    const handleChoice = (card: Card) => {
        if (card.id === choiceOne?.id) {
            return;
        }
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true);
            if (choiceOne.src === choiceTwo.src) {
                setmatches(matches + 1);
                setCards(prevCards => 
                    prevCards.map(card => 
                        card.src === choiceOne.src ? {...card, matched: true} : card)
                );
            }
            setTimeout(() => resetTurn(), 1000);
        }
    }, [choiceOne, choiceTwo])

    // useEffect(() => {
    //     if (matches === 6) setCards(endgameTemp);
    // }, [cards])

    return (
        <div className="App">
            <h1>Magic Match</h1>
            <button onClick={shuffleCards}>New Game</button>

            <div className="card-grid">
                {cards.map( card => (
                    <SingleCard 
                        key={card.id} 
                        card={card} 
                        handleChoice={handleChoice}
                        flipped={card === choiceOne || card == choiceTwo || card.matched}
                        disabled={disabled} />
                )
                )}
            </div>

            <p>matches: {matches}</p>
        </div>
    );
}

export default App;