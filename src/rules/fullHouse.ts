import {Rule} from "../rule.ts";

export class FullHouse extends Rule{
    checkRule(inputHand: string[], cardValueMap: Map<string, number>): boolean {
        return cardValueMap.size === 2;
    }

    constructor(){
        super();
        this.score = 7;
    }
}