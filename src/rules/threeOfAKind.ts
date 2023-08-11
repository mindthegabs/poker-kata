import {Rule} from "../rule.ts";

export class ThreeOfAKind extends Rule {
    constructor() {
        super();
        this.score = 4;
    }

    checkRule(inputHand: string[], cardValueMap: Map<string, number>): boolean {
        for (const valueOccurrences of cardValueMap.values()) {
            if (valueOccurrences === 3) {
                return true;
            }
        }
        return false;
    }
}