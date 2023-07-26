import {Rule} from "../rule.ts";

export class Straight extends Rule {
    private static readonly cardValuesDictionary: { [key: string]: number } = {
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

    constructor() {
        super();
        this.score = 5;
    }

    checkRule(inputHand: string[], cardValueMap: Map<string, number>): boolean {

        const intValues: number[] = inputHand.map((card) => Straight.cardValuesDictionary[card[0]]);

        intValues.sort((a, b) => a - b);

        for (let i = 1; i < intValues.length; i++) {
            if (intValues[i] - intValues[i - 1] !== 1) {
                return false;
            }
        }

        return true;
    }
}