import {Rule} from "../rule.ts";
import {FiveCards, Hand} from "../hand.ts";

export class FullHouse extends Rule{
    constructor(){
        super();
        this.score = 7;
    }

    checkRule(inputHand: FiveCards, cardValueMap: Map<string, number>): boolean {
        return Hand.checkNumberOfPairsAndTriplets(cardValueMap, 1, 1);
    }
}