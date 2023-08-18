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
        return RoyalFlush.containsRoyalFlushValues(cardValueMap) && new Flush().checkRule(inputHand, cardValueMap);
    }

    private static containsRoyalFlushValues(cardValueMap): boolean {
        for (const value of RoyalFlush.royalFlushValues) {
            if (!cardValueMap.has(value)) {
                return false;
            }
        }
        return true;
    }
}