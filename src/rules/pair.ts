import {Rule} from "../rule.ts";
import {FiveCards} from "../hand.ts";

export class Pair extends Rule {
    constructor() {
        super();
        this.score = 2;
    }

    checkRule(inputHand: FiveCards, cardValueMap: Map <string, number>): boolean {
        return cardValueMap.size === 4;
    }
}