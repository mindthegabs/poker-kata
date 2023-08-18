import {Rule} from "../rule.ts";
import {Flush} from "./flush.ts";
import {FiveCards} from "../hand.ts";

export class RoyalFlush extends Rule {
    private static readonly royalFlushValues = ['A', 'K', 'Q', 'J', 'T'];

    constructor() {
        super();
        this.score = 10;
    }

    checkRule(inputHand: FiveCards, cardValueMap: Map<string, number>): boolean {
        return this.containsRoyalFlushValues(cardValueMap) && new Flush().checkRule(inputHand, cardValueMap);
    }

    private containsRoyalFlushValues(cardValueMap): boolean {
        return RoyalFlush.royalFlushValues.every((value) => cardValueMap.has(value));
    }
}