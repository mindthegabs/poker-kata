import { FiveCards } from "../hand.ts";
import {Rule} from "../rule.ts";

export class FourOfAKind extends Rule{
    constructor(){
        super();
        this.score = 8;
    }

    checkRule(inputHand: FiveCards, cardValueMap: Map<string, number>): boolean {
        const valueOccurrences = Array.from(cardValueMap.values());

        return valueOccurrences.includes(4);
    }
}