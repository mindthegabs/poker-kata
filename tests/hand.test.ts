import {Hand} from '../src/hand';

describe('Hand', () => {

    it('should return 10 if hand contains 5 cards of the same suit, where the values are Ace, King, Queen, Jack,Ten', function () {
        const royalFlush: string[] = ['Ac', 'Kc', 'Qc', 'Jc', 'Tc'];
        const hand = new Hand();
        const expectedScore = 10;

        const actualScore = hand.calculateScore(royalFlush);

        expect(actualScore).toEqual(expectedScore);
    });

    it('should return 9 if hand contains 5 cards of the same suit with consecutive values', function () {
        const straightFlush: string[] = ['7d', '8d', '9d', 'Td', 'Jd']
        const hand = new Hand();
        const expectedScore = 9;

        const actualScore = hand.calculateScore(straightFlush);

        expect(actualScore).toEqual(expectedScore);
    });


    it('should return 8 if hand contains 4 cards with the same value', function () {
        const fourOfAKind: string[] = ['9h', '9s', '9c', '9d', '3d'];
        const hand = new Hand();
        const expectedScore = 8;

        const actualScore = hand.calculateScore(fourOfAKind);

        expect(actualScore).toEqual(expectedScore);
    });

    it('should return 7 if hand contains 3 cards of the same value, with the remaining 2 cards forming a pair', function () {
        const fullHouse: string[] = ['6d', '6s', '6h', '3c', '3s']
        const hand = new Hand();
        const expectedScore = 7;

        const actualScore = hand.calculateScore(fullHouse);

        expect(actualScore).toEqual(expectedScore);
    });

    it('should return 6 if hand is flush', () => {
        const flush: string[] = ['2h', '7h', 'Jh', 'Ah', '4h'];
        const hand = new Hand();
        const expectedScore = 6;

        const actualScore = hand.calculateScore(flush);

        expect(actualScore).toEqual(expectedScore);
    });

    it('should return 5 if hand contains 5 consecutive values', () => {
        const straight: string[] = ['3d', '4c', '5d', '6s', '7h'];
        const hand = new Hand();
        const expectedScore = 5;

        const actualScore = hand.calculateScore(straight);

        expect(actualScore).toEqual(expectedScore);
    });


    it('should return 4 if three of the cards have the same value', function () {
        const threeOfAKind: string[] = ['8h', '8s', '8c', '2c', 'Td'];
        const hand = new Hand();
        const expectedScore = 4;

        const actualScore = hand.calculateScore(threeOfAKind);

        expect(actualScore).toEqual(expectedScore);
    });

    it('should return 3 if hand has two pairs', function () {
        const twoPairs: string[] = ['Qd', 'Qs', '5h', '2c', '5s'];
        const hand = new Hand();
        const expectedScore = 3;

        const actualScore = hand.calculateScore(twoPairs);

        expect(actualScore).toEqual(expectedScore);
    });

    it('should return 2 if hand is pair', () => {
        const pair: string[] = ['Kc', 'Kd', '7c', '2s', 'Jh'];
        const hand = new Hand();
        const expectedScore = 2;

        const actualScore = hand.calculateScore(pair);

        expect(actualScore).toEqual(expectedScore);
    });

    it('should return 1 if no other rules apply', () => {
        const highCard: string[] = ['Qd', '7s', '5h', '3c', 'Ts'];
        const hand = new Hand();
        const expectedScore = 1;

        const actualScore = hand.calculateScore(highCard);

        expect(actualScore).toEqual(expectedScore);
    });

    it('should throw an error for an invalid card value', () => {
        const invalidCards = ['2h', '3h', '4h', '5h', 'Xh'];
        const hand = new Hand();
        const expectedError = 'Invalid card value';

        const actual = () => hand.calculateScore(invalidCards);

        expect(actual).toThrowError(expectedError);
    });

    it('should throw an error for an invalid card value', () => {
        const invalidCards = ['15h', '3h', '4h', '5h', 'Ah'];
        const hand = new Hand();
        const expectedError = 'Invalid card value';

        const actual = () => hand.calculateScore(invalidCards);

        expect(actual).toThrowError(expectedError);
    });

    it('should throw an error for an invalid card value', () => {
        const invalidCards = ['', '3h', '4h', '5h', 'Ah'];
        const hand = new Hand();
        const expectedError = 'Invalid card value';
  
        const actual = () => hand.calculateScore(invalidCards);
  
        expect(actual).toThrowError(expectedError);
      });
  
      it('should throw an error for an invalid card suit', () => {
        const invalidCards = ['Ac', '3w', '4h', '5h', 'Ah'];
        const hand = new Hand();
        const expectedError = 'Invalid card suit';
  
        const actual = () => hand.calculateScore(invalidCards);
  
        expect(actual).toThrowError(expectedError);
      });
  
      it('should throw an error for an invalid card suit', () => {
        const invalidCards = ['2h', '3h', '4h', '5h', '6x'];
        const hand = new Hand();
        const expectedError = 'Invalid card suit';
  
        const actual = () => hand.calculateScore(invalidCards);
  
        expect(actual).toThrowError(expectedError);
      });
  
      it('should throw an error for multiple invalid card suits', () => {
        const invalidCards = ['2h', '3h', '4x', '5h', '6yr'];
        const hand = new Hand();
        const expectedError = 'Invalid card suit';
  
        const actual = () => hand.calculateScore(invalidCards);
  
        expect(actual).toThrowError(expectedError);
      });
  
      it('should throw an error for an invalid card suit', () => {
        const invalidCards = ['2H', '3h', '4h', '5h', '6c'];
        const hand = new Hand();
        const expectedError = 'Invalid card suit';
  
        const actual = () => hand.calculateScore(invalidCards);
  
        expect(actual).toThrowError(expectedError);
      });

});
