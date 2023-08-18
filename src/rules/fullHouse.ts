import {Rule} from "../rule.ts";
import {FiveCards} from "../hand.ts";

export class FullHouse extends Rule{
    constructor(){
        super();
        this.score = 7;
    }

    checkRule(inputHand: FiveCards, cardValueMap: Map<string, number>): boolean {
        if (cardValueMap.size !== 2) {
            return false;
        }

        const cardValues = Array.from(cardValueMap.values());
        const [cardValue1, cardValue2] = cardValues;

        return cardValue1 == 3 && cardValue2 == 2 || cardValue2 == 3 && cardValue1 == 2;
        

    }
}