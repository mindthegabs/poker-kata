import {Card} from './card/card.ts';
import {CardValue} from "./card/cardValue.ts";
import {Pair} from './rules/pair.ts';
import {TwoPairs} from "./rules/twoPairs.ts";
import {ThreeOfAKind} from "./rules/threeOfAKind.ts";
import {FourOfAKind} from "./rules/fourOfAKind.ts";
import {Straight} from "./rules/straight.ts";
import {Flush} from "./rules/flush.ts";
import {FullHouse} from "./rules/fullHouse.ts";
import {RoyalFlush} from "./rules/royalFlush.ts";
import {StraightFlush} from "./rules/straightFlush.ts";
import {HighCard} from "./rules/highCard.ts";

export class Hand {
    private cardValueMap: Map<string, number>;
    private readonly inputHand: FiveCards;
    private rules = [new RoyalFlush(), new StraightFlush(), new FourOfAKind(), new FullHouse(), new Flush(), new Straight(), new ThreeOfAKind(), new TwoPairs(), new Pair(), new HighCard()];

    constructor(inputHand: FiveCards) {
        this.inputHand = inputHand;
    }

    static fromIdentifiers(identifiers: string[]): Hand {
        if (identifiers.length !== 5) {
            throw new Error('Invalid number of identifiers');
        }

        const cards = identifiers.map(identifier => Card.fromIdentifier(identifier));
        const fiveCards: FiveCards = [cards[0], cards[1], cards[2], cards[3], cards[4]];

        return new Hand(fiveCards);
    }

    getScore(): number {
        this.cardValueMap = this.createCardValueMap();

        for (const rule of this.rules) {
            if (rule.checkRule(this.inputHand, this.cardValueMap)) {
                return rule.getScore();
            }
        }
    }

    // creates a map of the inputHand where the key is the card value and the value is the number of cards of that value
    private createCardValueMap(): Map<CardValue, number> {
        return this.inputHand.reduce((valueMap, card) => {
            const value = card.getValue();
            valueMap.set(value, (valueMap.get(value) || 0) + 1);
            return valueMap;
        }, new Map<CardValue, number>());
    }

    static checkNumberOfPairsAndTriplets(cardValueMap: Map<string, number>, expectedNumberOfPairs: number, expectedNumberOfTriplets: number): boolean {
        const valueOccurrences = Array.from(cardValueMap.values());

        const numberOfPairs = valueOccurrences.reduce((count, value) => count + (value === 2 ? 1: 0), 0);
        const numberOfTriplets = valueOccurrences.reduce((count, value) => count + (value === 3 ? 1: 0), 0);

        return numberOfPairs === expectedNumberOfPairs && numberOfTriplets === expectedNumberOfTriplets;
    }
}

export type FiveCards = [Card, Card, Card, Card, Card];
