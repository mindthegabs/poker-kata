export class Hand {

    private cardMap: Map<string, number>;

    calculateScore(inputHand: string[]): number {
        let highHandScore: number = 1;

        //and the value is the number of the occurances of that value in the hand
        this.cardMap = this.createCardMap(inputHand);

        if (this.isFourOfAKind()) {
            return 8;
        }

        if (this.isFullHouse()) {
            return 7;
        }

        if (this.isFlush(inputHand)) {
            return 6;
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
        return highHandScore;
    }

    private createCardMap(inputHand: string[]): Map<string, number> {
        //create a map of the inputHand where the key is the value of the card
        const cardMap: Map<string, number> = new Map();
        for (const identifier of inputHand) {
            let currentValue = identifier.charAt(0);
            if (cardMap.has(currentValue)) {
                cardMap.set(currentValue, cardMap.get(currentValue) + 1);
            } else {
                cardMap.set(currentValue, 1);
            }
        }

        return cardMap;
    }

    private isFlush(inputHand: string[]): boolean {
        const suit = inputHand[0].charAt(1);

        for (const card of inputHand) {
            if (card.charAt(1) !== suit) {
                return false;
            }
        }
        return true;
    }

    private isPair() {
        return this.cardMap.size === 4;
    }

    private isFourOfAKind() {
        for (const valueOccurrences of this.cardMap.values()) {
            if (valueOccurrences === 4) {
                return true;
            }
        }
        return false;
    }

    private isFullHouse() {
        return this.cardMap.size === 2;
    }

    private isThreeOfAKind() {
        for (const valueOccurrences of this.cardMap.values()) {
            if (valueOccurrences === 3) {
                return true;
            }
        }
        return false;
    }

    private isTwoPairs() {
        return this.cardMap.size === 3;
    }
}