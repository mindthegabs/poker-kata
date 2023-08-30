import {Rule} from "../rule.ts";
import {FiveCards, Hand} from "../hand.ts";

export class TwoPairs extends Rule {
    constructor() {
        super();
        this.score = 3;
    }

    checkRule(inputHand: FiveCards, cardValueMap: Map<string, number>): boolean {
        return Hand.checkNumberOfPairsAndTriplets(cardValueMap, 2, 0);
    }
}