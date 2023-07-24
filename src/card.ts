export class Card {
    value: string; //2, 3, 4 ,5, 6, 7, 8, 9, T , J, Q, K, A
    suit: string; //d, h, s, c

    constructor(value: string, suit: string) {
        this.value = value;
        this.suit = suit;
    }
}
