import {Rule} from "../rule.ts";
import {Flush} from "./flush.ts";
import {Straight} from "./straight.ts";
import {FiveCards} from "../hand.ts";

export class StraightFlush extends Rule {
    constructor() {
        super();
        this.score = 9;
    }

    checkRule(inputHand: FiveCards, cardValueMap: Map<string, number>): boolean {
        return new Flush().checkRule(inputHand, cardValueMap) && new Straight().checkRule(inputHand, cardValueMap);
    }
}