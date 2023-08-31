import {CardValue, cardValues} from "./cardValue.ts";
import {CardSuit} from "./cardSuit.ts";
import {CardValidator} from "./cardValidator.ts";

export class Card {
    private constructor(private readonly value: CardValue, private readonly suit: CardSuit) {}

    static fromIdentifier(identifier: string): Card {
        CardValidator.validateCard(identifier);
        
        const value = identifier.charAt(0) as CardValue;
        const suit = identifier.charAt(1) as CardSuit;

        return new Card(value, suit);
    }

    getValue(): CardValue {
        return this.value;
    }

    getSuit(): CardSuit {
        return this.suit;
    }

    hasSameSuitAs(card: Card): boolean {
        return this.suit === card.getSuit();
    }

    isNextCardAfter(card: Card): boolean {
        return cardValues.indexOf(this.value) === cardValues.indexOf(card.getValue()) + 1;
    }
}
