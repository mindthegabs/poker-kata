import {Rule} from "../rule.ts";
import {FiveCards} from "../hand.ts";
import {checkNumberOfPairsAndTriplets} from "./cardCombinationUtils.ts";

export class FullHouse extends Rule{
    constructor(){
        super();
        this.score = 7;
    }

    checkRule(inputHand: FiveCards, cardValueMap: Map<string, number>): boolean {
        return checkNumberOfPairsAndTriplets(cardValueMap, 1, 1);
    }
}