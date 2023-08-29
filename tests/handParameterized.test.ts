import {Hand} from '../src/hand';

describe('Hand', () => {
    const testCases: [string, string[], number][] = [
        [
            'should return 10 if hand contains 5 cards of the same suit, where the values are Ace, King, Queen, Jack,Ten',
            ['Ac', 'Kc', 'Qc', 'Jc', 'Tc'],
            10
        ],
        [
            'should return 9 if hand contains 5 cards of the same suit with consecutive values',
            ['9h', '8h', '7h', '6h', '5h'],
            9
        ],
        [
            'should return 8 if hand contains 4 cards with the same value',
            ['7h', '7d', '7s', '7c', '5h'],
            8
        ],
        [
            'should return 7 if hand contains 3 cards of the same value, with the remaining 2 cards forming a pair',
            ['Ah', 'Ad', 'As', 'Kc', 'Kh'],
            7
        ],
        [
            'should return 6 if hand is flush',
            ['2h', '4h', '6h', '8h', 'Th'],
            6
        ],
        [
            'should return 5 if hand contains 5 consecutive values',
            ['3h', '4s', '5d', '6h', '7c'],
            5
        ],
        [
            'should return 4 if three of the cards have the same value',
            ['Qh', 'Qd', 'Qs', '2h', '3c'],
            4
        ],
        [
            'should return 3 if hand has two pairs',
            ['8h', '8d', '4s', '4c', 'Ts'],
            3
        ],
        [
            'should return 2 if hand is pair',
            ['Jh', 'Jd', 'Qs', '9h', 'Ac'],
            2
        ],
        [
            'should return 1 if no other rules apply',
            ['3h', '6d', '9s', 'Th', 'Kc'],
            1
        ],
    ];
    test.each(testCases)('%s', (description, inputHand, expectedScore) => {
        const hand = Hand.fromIdentifiers(inputHand);

        const actualScore = hand.getScore();

        expect(actualScore).toEqual(expectedScore);
    });
});
