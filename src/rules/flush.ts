import {Rule} from "../rule.ts";
import {FiveCards} from "../hand.ts";

export class Flush extends Rule{
    constructor(){
        super();
        this.score = 6;
    }

    checkRule(inputHand: FiveCards, cardValueMap: Map<string, number>): boolean {
        const firstCard = inputHand[0];

        return inputHand.every((card) => card.hasSameSuitAs(firstCard));
    }
}