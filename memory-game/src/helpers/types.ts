export interface Card {
    src: string;
    id: number;
    matched: boolean;
}
export interface SingleCardProps {
    card: Card, 
    handleChoice: (card: Card) => void,
    flipped: boolean,
    disabled: boolean;
}
