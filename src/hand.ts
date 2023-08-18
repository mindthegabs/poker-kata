import {Card} from './card.ts';
import {Pair} from './rules/pair.ts';
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
    private readonly inputHand: FiveCards;
    private highCardScore = 1;
    private rules= [new RoyalFlush(), new StraightFlush(), new FourOfAKind(), new FullHouse(), new Flush(), new Straight(), new ThreeOfAKind(), new TwoPairs(), new Pair()];

    
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

    calculateScore(): number {
        this.cardValueMap = this.createCardValueMap();

        for (const rule of this.rules) {
            if (rule.checkRule(this.inputHand, this.cardValueMap)) {
                return rule.score;
            }
        }

        return this.highCardScore;
    }

    // creates a map of the inputHand where the key is the card value and the value is the number of cards of that value
    private createCardValueMap(): Map<string, number> {
        const cardValueMap: Map<string, number> = new Map();
        for (const card of this.inputHand) {
            let currentValue = card.getValue();
            if (cardValueMap.has(currentValue)) {
                cardValueMap.set(currentValue, cardValueMap.get(currentValue) + 1);
            } else {
                cardValueMap.set(currentValue, 1);
            }
        }

        return cardValueMap;
    }
}

export type FiveCards = [Card, Card, Card, Card, Card];
