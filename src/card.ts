export class Card {
    private readonly _value: string; //2, 3, 4 ,5, 6, 7, 8, 9, T , J, Q, K, A
    private readonly _suit: string; //d, h, s, c

    constructor(identifier: string) {
        this._value = identifier.charAt(0);
        this._suit = identifier.charAt(1);
    }


    get value(): string {
        return this._value;
    }

    get suit(): string {
        return this._suit;
    }
}
