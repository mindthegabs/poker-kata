import { Hand } from '../src/hand';

describe('Hand', () => {
    const hand = new Hand();

    test.each([
        [['Ac', 'Kc', 'Qc', 'Jc', 'Tc'], 10], // Royal Flush
        [['7d', '8d', '9d', 'Td', 'Jd'], 9], // Straight Flush
        [['9h', '9s', '9c', '9d', '3d'], 8], // Four of a Kind
        [['6d', '6s', '6h', '3c', '3s'], 7], // Full House
        [['2h', '7h', 'Jh', 'Ah', '4h'], 6], // Flush
        [['3d', '4c', '5d', '6s', '7h'], 5], // Straight
        [['8h', '8s', '8c', '2c', 'Td'], 4], // Three of a Kind
        [['Qd', 'Qs', '5h', '2c', '5s'], 3], // Two Pairs
        [['Kc', 'Kd', '7c', '2s', 'Jh'], 2], // Pair
        [['Qd', '7s', '5h', '3c', 'Ts'], 1], // High Card
    ])('should return %i when hand is %p', (inputHand, expectedScore) => {
        const actualScore = hand.calculateScore(inputHand);
        expect(actualScore).toEqual(expectedScore);
    });
});
