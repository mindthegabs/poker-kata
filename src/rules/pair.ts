import {Rule} from "../rule.ts";

export class Pair extends Rule {
    constructor() {
        super();
        this.score = 2;
    }

    checkRule(inputHand: string[], cardValueMap: Map <string, number>): boolean {
        return cardValueMap.size === 4;
    }
}