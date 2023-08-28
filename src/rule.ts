import { FiveCards } from "./hand.ts";

export abstract class Rule {
    protected score: number;
    abstract checkRule(inputHand: FiveCards, cardValueMap: Map <string, number>): boolean;

    getScore(): number {
        return this.score;
    }
}