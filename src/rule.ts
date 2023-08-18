import { FiveCards } from "./hand.ts";

export abstract class Rule {
    score: number;
    abstract checkRule(inputHand: FiveCards, cardValueMap: Map <string, number>): boolean;
}