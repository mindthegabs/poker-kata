import {Rule} from "../rule.ts";
import {Card} from "../card.ts";

export class Flush extends Rule{
    checkRule(inputHand: string[], cardValueMap: Map<string, number>): boolean {
        const suit = new Card(inputHand[0]).suit;

        for (const identifier of inputHand) {
            if (new Card(identifier).suit !== suit) {
                return false;
            }
        }
        return true;
    }

    constructor(){
        super();
        this.score = 6;
    }
}