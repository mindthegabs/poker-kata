
export class Hand {
    calculateScore(inputHand: string[]): number {
        let score: number = 1;
        if (this.isFlush(inputHand)){
            return 6;
        }
        return score;
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
}