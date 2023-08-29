import {CardValue} from "./cardValue.ts";
import {CardSuit} from "./cardSuit.ts";
import {CardValidator} from "./cardValidator.ts";

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

    hasSameSuitAs(card: Card): boolean {
        return this._suit === card._suit;
    }
}
