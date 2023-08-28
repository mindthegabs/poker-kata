import { FiveCards } from "../hand.ts";
import {Rule} from "../rule.ts";
import {checkNumberOfPairsAndTriplets} from "./cardCombinationUtils.ts";

export class ThreeOfAKind extends Rule {
    constructor() {
        super();
        this.score = 4;
    }

    checkRule(inputHand: FiveCards, cardValueMap: Map<string, number>): boolean {
        return checkNumberOfPairsAndTriplets(cardValueMap, 0, 1);
    }
}