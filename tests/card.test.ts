import {Card} from '../src/card';

describe('Card', () => {
    it('should create a card with the specified identifier', () => {
        const identifier = 'As';
        const expectedValue = 'A';
        const expectedSuit = 's';

        const card = Card.fromIdentifier(identifier)

        expect(card.getValue()).toBe(expectedValue);
        expect(card.getSuit()).toBe(expectedSuit);

    });

    it('should throw an error for an invalid card value', () => {
        const identifier = 'Xh';
        const expectedError = 'Invalid card value';

        const result = () => Card.fromIdentifier(identifier);

        expect(result).toThrowError(expectedError);
    });

    it('should throw an error for an invalid card suit', () => {
        const identifier = '2P';
        const expectedError = 'Invalid card suit';

        const result = () => Card.fromIdentifier(identifier);

        expect(result).toThrowError(expectedError);
    });

    it('should throw an error for an empty identifier', () => {
        const identifier = '';
        const expectedError = 'Invalid card value';

        const result = () => Card.fromIdentifier(identifier);

        expect(result).toThrowError(expectedError);
    });
});
