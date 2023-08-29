import {InvalidIdentifierLength} from "./InvalidIdentifierLength.ts";
import {InvalidValue} from "./InvalidValue.ts";
import {InvalidSuit} from "./InvalidSuit.ts";
import {CardValue} from "./cardValue.ts";
import {CardSuit} from "./cardSuit.ts";


export class CardValidator {
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
