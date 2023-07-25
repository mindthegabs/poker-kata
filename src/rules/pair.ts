import {Rule} from "../rule.ts";

export class Pair extends Rule {
    checkRule(inputHand: string[], cardValueMap: Map <string, number>): boolean {
        return cardValueMap.size === 4;
    }

    constructor() {
        super();
        this.score = 2;
    }
}