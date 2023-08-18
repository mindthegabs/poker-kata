import {InvalidIdentifierLength} from "./errors/InvalidIdentifierLength.ts";
import {InvalidValue} from "./errors/InvalidValue.ts";
import {InvalidSuit} from "./errors/InvalidSuit.ts";

 export enum CardValue {
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
    private constructor(private readonly _value: CardValue, private readonly _suit: CardSuit) {}

    static fromIdentifier(identifier: string): Card {
        CardValidator.validateCard(identifier);
        
        const value = identifier.charAt(0) as CardValue;
        const suit = identifier.charAt(1) as CardSuit;

        return new Card(value, suit);
    }

    getValue(): CardValue {
        return this._value;
    }

    getSuit(): CardSuit {
        return this._suit;
    }
}

class CardValidator {
    static validateCard(identifier: string): void {
        if (identifier.length !== 2) {
            throw new InvalidIdentifierLength(identifier);
        }

        const value = identifier.charAt(0) as CardValue;
        const suit = identifier.charAt(1) as CardSuit;

        if (!Object.values(CardValue).includes(value)) {
            throw new InvalidValue(identifier);
        }

        if (!Object.values(CardSuit).includes(suit)) {
            throw new InvalidSuit(identifier);
        }
    }
}
