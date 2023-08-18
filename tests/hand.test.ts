import {Hand} from '../src/hand';

describe('Hand', () => {
    it('should return 10 if hand contains 5 cards of the same suit, where the values are Ace, King, Queen, Jack,Ten', () => {
        const royalFlush: string[] = ['Ac', 'Kc', 'Qc', 'Jc', 'Tc'];
        const hand = Hand.fromIdentifiers(royalFlush);
        const expectedScore = 10;

        const actualScore = hand.calculateScore();

        expect(actualScore).toEqual(expectedScore);
    });

    it('should return 9 if hand contains 5 cards of the same suit with consecutive values', () => {
        const straightFlush: string[] = ['7d', '8d', '9d', 'Td', 'Jd']
        const hand = Hand.fromIdentifiers(straightFlush);
        const expectedScore = 9;

        const actualScore = hand.calculateScore();

        expect(actualScore).toEqual(expectedScore);
    });


    it('should return 8 if hand contains 4 cards with the same value', () => {
        const fourOfAKind: string[] = ['9h', '9s', '9c', '9d', '3d'];
        const hand = Hand.fromIdentifiers(fourOfAKind);
        const expectedScore = 8;

        const actualScore = hand.calculateScore();

        expect(actualScore).toEqual(expectedScore);
    });

    it('should return 7 if hand contains 3 cards of the same value, with the remaining 2 cards forming a pair', () => {
        const fullHouse: string[] = ['6d', '6s', '6h', '3c', '3s']
        const hand = Hand.fromIdentifiers(fullHouse)
        const expectedScore = 7;

        const actualScore = hand.calculateScore();

        expect(actualScore).toEqual(expectedScore);
    });

    it('should return 6 if hand is flush', () => {
        const flush: string[] = ['2h', '7h', 'Jh', 'Ah', '4h'];
        const hand = Hand.fromIdentifiers(flush);
        const expectedScore = 6;

        const actualScore = hand.calculateScore();

        expect(actualScore).toEqual(expectedScore);
    });

    it('should return 5 if hand contains 5 consecutive values', () => {
        const straight: string[] = ['3d', '4c', '5d', '6s', '7h'];
        const hand = Hand.fromIdentifiers(straight)
        const expectedScore = 5;

        const actualScore = hand.calculateScore();

        expect(actualScore).toEqual(expectedScore);
    });

    it('should return 4 if three of the cards have the same value', () => {
        const threeOfAKind: string[] = ['8h', '8s', '8c', '2c', 'Td'];
        const hand = Hand.fromIdentifiers(threeOfAKind);
        const expectedScore = 4;

        const actualScore = hand.calculateScore();

        expect(actualScore).toEqual(expectedScore);
    });

    it('should return 3 if hand has two pairs', () => {
        const twoPairs: string[] = ['Qd', 'Qs', '5h', '2c', '5s'];
        const hand = Hand.fromIdentifiers(twoPairs);
        const expectedScore = 3;

        const actualScore = hand.calculateScore();

        expect(actualScore).toEqual(expectedScore);
    });

    it('should return 2 if hand is pair', () => {
        const pair: string[] = ['Kc', 'Kd', '7c', '2s', 'Jh'];
        const hand = Hand.fromIdentifiers(pair);
        const expectedScore = 2;

        const actualScore = hand.calculateScore();

        expect(actualScore).toEqual(expectedScore);
    });

    it('should return 1 if no other rules apply', () => {
        const highCard: string[] = ['Qd', '7s', '5h', '3c', 'Ts'];
        const hand = Hand.fromIdentifiers(highCard);
        const expectedScore = 1;

        const actualScore = hand.calculateScore();

        expect(actualScore).toEqual(expectedScore);
    });
});
