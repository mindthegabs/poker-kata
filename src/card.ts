 enum CardValue {
    Two = '2',
    Three = '3',
    Four = '4',
    Five = '5',
    Six = '6',
    Seven = '7',
    Eight = '8',
    Nine = '9',
    Ten = 'T',
    Jack = 'J',
    Queen = 'Q',
    King = 'K',
    Ace = 'A',
}

 enum CardSuit {
    Diamond = 'd',
    Heart = 'h',
    Spade = 's',
    Club = 'c',
}

export class Card {
    private readonly _value: CardValue;
    private readonly _suit: CardSuit;

    constructor(identifier: string) {
        const value = identifier.charAt(0) as CardValue;
        const suit = identifier.charAt(1) as CardSuit;

        this.validateCard(value, suit);

        this._value = value;
        this._suit = suit;
    }

    getValue(): CardValue {
        return this._value;
    }

    getSuit(): CardSuit {
        return this._suit;
    }

    private validateCard(value: CardValue, suit: CardSuit): void {
        if (!Object.values(CardValue).includes(value)) {
            throw new Error('Invalid card value');
        }

        if (!Object.values(CardSuit).includes(suit)) {
            throw new Error('Invalid card suit');
        }
    }
}
