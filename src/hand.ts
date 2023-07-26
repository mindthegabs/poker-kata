import {Card} from './card.ts';
import {Pair} from './rules/pair.ts';
import {Rule} from "./rule.ts";
import {TwoPairs} from "./rules/twoPairs.ts";
import {ThreeOfAKind} from "./rules/threeOfAKind.ts";
import {FourOfAKind} from "./rules/fourOfAKind.ts";
import {Straight} from "./rules/straight.ts";
import {Flush} from "./rules/flush.ts";
import {FullHouse} from "./rules/fullHouse.ts";
import {RoyalFlush} from "./rules/royalFlush.ts";
import {StraightFlush} from "./rules/straightFlush.ts";

export class Hand {
    private cardValueMap: Map<string, number>;
    private inputHand: string[];
    private highHandScore: number = 1;

    private rules: Rule[] = [new RoyalFlush(), new StraightFlush(), new FourOfAKind(), new FullHouse(), new Flush(), new Straight(), new ThreeOfAKind(), new TwoPairs(), new Pair()];


    calculateScore(inputHand: string[]): number {
        this.inputHand = inputHand;

        this.cardValueMap = this.createCardValueMap();

        for (const rule of this.rules) {
            if (rule.checkRule(this.inputHand, this.cardValueMap)) {
                return rule.score;
            }
        }

        return this.highHandScore;
    }

    //map of the inputHand where the key is the card value and the value is the number of cards of that value
    private createCardValueMap(): Map<string, number> {
        const cardValueMap: Map<string, number> = new Map();
        for (const identifier of this.inputHand) {
            let currentValue = new Card(identifier).value;
            if (cardValueMap.has(currentValue)) {
                cardValueMap.set(currentValue, cardValueMap.get(currentValue) + 1);
            } else {
                cardValueMap.set(currentValue, 1);
            }
        }

        return cardValueMap;
    }

}