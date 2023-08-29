export class InvalidSuit extends Error {
    constructor(identifier: string) {
        super(`Invalid suit in identifier: ${identifier}`);
        this.name = 'InvalidSuit';
        Object.setPrototypeOf(this, InvalidSuit.prototype);
    }
}