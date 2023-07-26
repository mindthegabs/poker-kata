import {Rule} from "../rule.ts";

export class TwoPairs extends Rule {

    constructor() {
        super();
        this.score = 3;
    }

    checkRule(inputHand: string[], cardValueMap: Map<string, number>): boolean {
        return cardValueMap.size === 3;
    }

}