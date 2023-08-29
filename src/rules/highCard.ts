import {Rule} from "../rule.ts";
import {FiveCards} from "../hand.ts";

export class HighCard extends Rule {
    constructor() {
        super();
        this.score = 1;
    }

    checkRule(inputHand: FiveCards, cardValueMap: Map<string, number>): boolean {
        return true;
    }
}