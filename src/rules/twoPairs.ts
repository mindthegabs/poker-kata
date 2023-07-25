import {Rule} from "../rule.ts";

export class TwoPairs extends Rule{
    checkRule(inputHand: string[], cardValueMap: Map<string, number>): boolean {
        return cardValueMap.size === 3;
    }

    constructor() {
        super();
        this.score = 3;
    }
}