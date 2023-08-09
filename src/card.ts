import {CardValue} from "./enums/cardValue.ts";
import {CardSuit} from "./enums/cardSuit.ts";

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

    get value(): CardValue {
        return this._value;
    }

    get suit(): CardSuit {
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
