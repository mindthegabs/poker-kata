import { Hand } from '../src/hand';

describe('Hand', () => {

    test.each([
        [10, ['Ac', 'Kc', 'Qc', 'Jc', 'Tc']], // Royal Flush
        [9, ['7d', '8d', '9d', 'Td', 'Jd']], // Straight Flush
        [8, ['9h', '9s', '9c', '9d', '3d']], // Four of a Kind
        [7, ['6d', '6s', '6h', '3c', '3s']], // Full House
        [6, ['2h', '7h', 'Jh', 'Ah', '4h']], // Flush
        [5, ['3d', '4c', '5d', '6s', '7h']], // Straight
        [4, ['8h', '8s', '8c', '2c', 'Td']], // Three of a Kind
        [3, ['Qd', 'Qs', '5h', '2c', '5s']], // Two Pairs
        [2, ['Kc', 'Kd', '7c', '2s', 'Jh']], // Pair
        [1, ['Qd', '7s', '5h', '3c', 'Ts']], // High Card
    ])('should return %p when hand is %p', (expectedScore, inputHand) => {
        const hand = new Hand();

        const actualScore = hand.calculateScore(inputHand);

        expect(actualScore).toEqual(expectedScore);
    });
});
