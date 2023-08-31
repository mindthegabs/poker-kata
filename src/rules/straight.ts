import {Rule} from "../rule.ts";
import {FiveCards} from "../hand.ts";
import {cardValues} from "../card/cardValue.ts";

export class Straight extends Rule {
    constructor() {
        super();
        this.score = 5;
    }

    checkRule(inputHand: FiveCards, cardValueMap: Map<string, number>): boolean {
        const inputHandSortedByValue = inputHand.sort((firstCard, secondCard) =>
            cardValues.indexOf(firstCard.getValue()) - cardValues.indexOf(secondCard.getValue()));

        for (let i = 1; i < inputHandSortedByValue.length - 1; i++) {
            if (!inputHandSortedByValue[i + 1].isNextCardAfter(inputHandSortedByValue[i])) {
                return false;
            }
        }
        return true;
    }
}