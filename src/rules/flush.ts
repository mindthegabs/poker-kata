import {Rule} from "../rule.ts";
import {Card} from "../card.ts";

export class Flush extends Rule{

    constructor(){
        super();
        this.score = 6;
    }

    checkRule(inputHand: string[], cardValueMap: Map<string, number>): boolean {
        const suit = new Card(inputHand[0]).suit;

        for (const identifier of inputHand) {
            if (new Card(identifier).suit !== suit) {
                return false;
            }
        }
        return true;
    }
}