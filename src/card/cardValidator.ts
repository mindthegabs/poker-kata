import {InvalidIdentifierLength} from "./InvalidIdentifierLength.ts";
import {InvalidValue} from "./InvalidValue.ts";
import {InvalidSuit} from "./InvalidSuit.ts";
import {cardValues} from "./cardValue.ts";
import {cardSuits} from "./cardSuit.ts";

export class CardValidator {
    static validateCard(identifier: string): void {
        if (identifier.length !== 2) {
            throw new InvalidIdentifierLength(identifier);
        }

        const value = identifier.charAt(0);
        const suit = identifier.charAt(1);

       if (!cardValues.includes(value)) {
            throw new InvalidValue(identifier);
        }

        if (!cardSuits.includes(suit)) {
            throw new InvalidSuit(identifier);
        }
    }
}
