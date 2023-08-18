import { FiveCards } from "../hand.ts";
import {Rule} from "../rule.ts";

export class FourOfAKind extends Rule{
    constructor(){
        super();
        this.score = 8;
    }

    checkRule(inputHand: FiveCards, cardValueMap: Map<string, number>): boolean {
        for (const valueOccurrences of cardValueMap.values()) {
            if (valueOccurrences === 4) {
                return true;
            }
        }
        return false;
    }
}