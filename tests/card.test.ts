import {Card} from '../src/card';
import { InvalidCardIdentifier } from '../src/errors/InvalidCardIdentifier';

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
        const expectedError = InvalidCardIdentifier;

        const result = () => Card.fromIdentifier(identifier);

        expect(result).toThrowError(expectedError);
    });

    it('should throw an error for an invalid card suit', () => {
        const identifier = '2P';
        const expectedError = InvalidCardIdentifier;

        const result = () => Card.fromIdentifier(identifier);

        expect(result).toThrowError(expectedError);
    });

    test.each([
        [''],
        ['A'],
        ['234']
    ])('should throw an error for identifier %p because of invalid length', (identifier) => {

        const result = () => Card.fromIdentifier(identifier);

        expect(result).toThrowError(InvalidCardIdentifier);
    });
});
