import {Card} from '../src/card/card';
import {InvalidSuit} from "../src/card/InvalidSuit";
import {InvalidValue} from "../src/card/InvalidValue";
import {InvalidIdentifierLength} from "../src/card/InvalidIdentifierLength";

describe('Card', () => {
    it('should create a card with the specified identifier', () => {
        const identifier = 'As';
        const expectedValue = 'A';
        const expectedSuit = 's';

        const card = Card.fromIdentifier(identifier);

        expect(card.getValue()).toBe(expectedValue);
        expect(card.getSuit()).toBe(expectedSuit);

    });

    it('should throw an error for an invalid card value', () => {
        const identifier = 'Xh';
        const expectedError = InvalidValue;

        const createCard = () => Card.fromIdentifier(identifier);

        expect(createCard).toThrowError(expectedError);
    });

    it('should throw an error for an invalid card suit', () => {
        const identifier = '2P';
        const expectedError = InvalidSuit;

        const createCard = () => Card.fromIdentifier(identifier);

        expect(createCard).toThrowError(expectedError);
    });

    test.each([
        [''],
        ['A'],
        ['234']
    ])('should throw an error for identifier %p because of invalid length', (identifier) => {

        const createCard = () => Card.fromIdentifier(identifier);

        expect(createCard).toThrowError(InvalidIdentifierLength);
    });
});
