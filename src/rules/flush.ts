import {Rule} from "../rule.ts";
import {Card} from "../card.ts";

export class Flush extends Rule{
    constructor(){
        super();
        this.score = 6;
    }

    checkRule(inputHand: string[], cardValueMap: Map<string, number>): boolean {
        const suit = Card.fromIdentifier(inputHand[0]).getSuit();

        for (const identifier of inputHand) {
            if (Card.fromIdentifier(identifier).getSuit() !== suit) {
                return false;
            }
        }
        return true;
    }
}