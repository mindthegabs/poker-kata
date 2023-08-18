import {Rule} from "../rule.ts";
import {FiveCards} from "../hand.ts";

export class Flush extends Rule{
    constructor(){
        super();
        this.score = 6;
    }

    checkRule(inputHand: FiveCards, cardValueMap: Map<string, number>): boolean {
        const suit = inputHand[0].getSuit();

        for (const card of inputHand) {
            if (card.getSuit() !== suit) {
                return false;
            }
        }
        return true;
    }
}