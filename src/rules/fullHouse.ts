import {Rule} from "../rule.ts";

export class FullHouse extends Rule{
    constructor(){
        super();
        this.score = 7;
    }

    checkRule(inputHand: string[], cardValueMap: Map<string, number>): boolean {
        return cardValueMap.size === 2;
    }
}