export class InvalidValue extends Error {
    constructor(identifier: string) {
        super(`Invalid value in identifier: ${identifier}`);
        this.name = 'InvalidValue';
        Object.setPrototypeOf(this, InvalidValue.prototype);
    }
}