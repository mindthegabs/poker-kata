export class InvalidIdentifierLength extends Error {
    constructor(identifier: string) {
        super(`Invalid length of identifier: ${identifier}`);
        this.name = 'InvalidIdentifierLength';
        Object.setPrototypeOf(this, InvalidIdentifierLength.prototype);
    }
}