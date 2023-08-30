import {FiveCards, Hand} from "../hand.ts";
import {Rule} from "../rule.ts";

export class ThreeOfAKind extends Rule {
    constructor() {
        super();
        this.score = 4;
    }

    checkRule(inputHand: FiveCards, cardValueMap: Map<string, number>): boolean {
        return Hand.checkNumberOfPairsAndTriplets(cardValueMap, 0, 1);
    }
}