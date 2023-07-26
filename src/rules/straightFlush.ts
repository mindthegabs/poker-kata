import {Rule} from "../rule.ts";
import {Flush} from "./flush.ts";
import {Straight} from "./straight.ts";

export class StraightFlush extends Rule {

    constructor() {
        super();
        this.score = 9;
    }

    checkRule(inputHand: string[], cardValueMap: Map<string, number>): boolean {

        return new Flush().checkRule(inputHand, cardValueMap) && new Straight().checkRule(inputHand, cardValueMap);
    }


}