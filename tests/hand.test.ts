import { Hand } from '../src/hand';

describe('Hand', () => {
    it('should return 6 if hand is flush', () => {
        const flush: string[] = ['2h', '7h', 'Jh', 'Ah', '4h'];
        const hand = new Hand();
        const expectedScore = 6;

        const actualScore = hand.calculateScore(flush);

        expect(actualScore).toEqual(expectedScore);
    });

    it('should return 1 if no other rules apply', () => {
        const highCard: string[] = ['Qd', '7s', '5h', '3c', 'Ts'];
        const hand = new Hand();
        const expectedScore = 1;

        const actualScore = hand.calculateScore(highCard);

        expect(actualScore).toEqual(expectedScore);
    });
});
