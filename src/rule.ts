export abstract class Rule {
    score: number;
    abstract checkRule(inputHand: string[], cardValueMap: Map <string, number>): boolean;
}