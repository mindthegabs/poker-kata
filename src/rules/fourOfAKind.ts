import {Rule} from "../rule.ts";

export class FourOfAKind extends Rule{
    checkRule(inputHand: string[], cardValueMap: Map<string, number>): boolean {
        for (const valueOccurrences of cardValueMap.values()) {
            if (valueOccurrences === 4) {
                return true;
            }
        }
        return false;
    }

    constructor(){
        super();
        this.score = 8;
    }
}