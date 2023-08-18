import {Rule} from "../rule.ts";
import {FiveCards} from "../hand.ts";

export class TwoPairs extends Rule {
    constructor() {
        super();
        this.score = 3;
    }

    checkRule(inputHand: FiveCards, cardValueMap: Map<string, number>): boolean {
        return cardValueMap.size === 3;
    }
}