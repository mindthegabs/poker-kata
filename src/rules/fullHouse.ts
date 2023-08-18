import {Rule} from "../rule.ts";
import {FiveCards} from "../hand.ts";

export class FullHouse extends Rule{
    constructor(){
        super();
        this.score = 7;
    }

    checkRule(inputHand: FiveCards, cardValueMap: Map<string, number>): boolean {
        return cardValueMap.size === 2;
    }
}