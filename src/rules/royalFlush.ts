import {Rule} from "../rule.ts";

export class RoyalFlush extends Rule {
    checkRule(inputHand: string[], cardValueMap: Map<string, number>): boolean {

        //TODO rename check if isRoyal
        const royalValues: string[] = ['A', 'K', 'Q', 'J', 'T'];

        for (const value of royalValues) {
            if (!cardValueMap.has(value)) {
                return false;
            }
        }


        //TODO check if isFlush
        return true;
    }

    constructor() {
        super();
        this.score = 10;
    }
}