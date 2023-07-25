export class Hand {

    private cardValueMap: Map<string, number>;
    private inputHand: string[];
    private highHandScore: number = 1;

    calculateScore(inputHand: string[]): number {
        this.inputHand = inputHand;


        //and the value is the number of the occurrences of that value in the hand
        this.cardValueMap = this.createCardMap();

        if (this.isRoyalFlush()) {
            return 10;
        }

        if (this.isStraightFlush()) {
            return 9;
        }

        if (this.isFourOfAKind()) {
            return 8;
        }

        if (this.isFullHouse()) {
            return 7;
        }

        if (this.isFlush()) {
            return 6;
        }

        if (this.isStraight()) {
            return 5;
        }

        if (this.isThreeOfAKind()) {
            return 4;
        }


        if (this.isTwoPairs()) {
            return 3;
        }

        if (this.isPair()) {
            return 2;
        }
        return this.highHandScore;
    }

    private createCardMap(): Map<string, number> {
        //create a map of the inputHand where the key is the value of the card
        const cardMap: Map<string, number> = new Map();
        for (const identifier of this.inputHand) {
            let currentValue = identifier.charAt(0);
            if (cardMap.has(currentValue)) {
                cardMap.set(currentValue, cardMap.get(currentValue) + 1);
            } else {
                cardMap.set(currentValue, 1);
            }
        }

        return cardMap;
    }

    private isFlush(): boolean {
        //TODO create new card object with getValue and getSuit instead of charAt(...)
        const suit = this.inputHand[0].charAt(1);

        for (const card of this.inputHand) {
            if (card.charAt(1) !== suit) {
                return false;
            }
        }
        return true;
    }

    private isPair() {
        return this.cardValueMap.size === 4;
    }

    private isFourOfAKind() {
        for (const valueOccurrences of this.cardValueMap.values()) {
            if (valueOccurrences === 4) {
                return true;
            }
        }
        return false;
    }

    private isFullHouse() {
        return this.cardValueMap.size === 2;
    }

    private isThreeOfAKind() {
        for (const valueOccurrences of this.cardValueMap.values()) {
            if (valueOccurrences === 3) {
                return true;
            }
        }
        return false;
    }

    private isTwoPairs() {
        return this.cardValueMap.size === 3;
    }

    private isRoyalFlush(): boolean {

        const royalValues :string[] = ['A', 'K', 'Q', 'J', 'T'];

        for (const value of royalValues) {
            if (!this.cardValueMap.has(value)) {
                return false;
            }
        }
        return true;
    }

    private isStraightFlush() {
        return this.isStraight() && this.isFlush();
    }


    private isStraight() {
        const cardValuesDictionary: {[key:string]: number} = {
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            'T': 10,
            'J': 11,
            'Q': 12,
            'K': 13,
            'A': 14
        }

        const intValues: number[] = this.inputHand.map((card) => cardValuesDictionary[card[0]]);

        intValues.sort((a, b) => a - b);

        for (let i = 1; i < intValues.length; i++) {
            if (intValues[i] - intValues[i - 1] !== 1) {
                return false;
            }
        }

        return true;
    }
}