import React from "react";
import { SingleCardProps } from "../helpers/types";
import './SingleCard.css'

const SingleCard: React.FC<SingleCardProps> = ({ card, handleChoice, flipped, disabled }) => {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    }

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt="card front" />
                <img className="back" src="img/cover.png" onClick={handleClick} alt="card back" />
            </div>
        </div>
    );
}

export default SingleCard;