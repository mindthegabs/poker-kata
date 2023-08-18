import {Rule} from "../rule.ts";
import {FiveCards} from "../hand.ts";

export class FullHouse extends Rule{
    constructor(){
        super();
        this.score = 7;
    }

    checkRule(inputHand: FiveCards, cardValueMap: Map<string, number>): boolean {
        const valueOccurrences = Array.from(cardValueMap.values());

        const numberOfPairs = valueOccurrences.reduce((count, value) => count + (value === 2 ? 1: 0), 0);
        const numberOfTriplets = valueOccurrences.reduce((count, value) => count + (value === 3 ? 1: 0), 0);

        return numberOfPairs === 1 && numberOfTriplets === 1;
    }
}