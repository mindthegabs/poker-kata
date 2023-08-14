export class InvalidCardIdentifier extends Error {
  constructor(identifier: string) {
    super(`Invalid Card identifier: ${identifier}`);
    this.name = 'InvalidCardIdentifier';
    Object.setPrototypeOf(this, InvalidCardIdentifier.prototype);
  }
}