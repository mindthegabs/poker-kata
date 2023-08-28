export function checkNumberOfPairsAndTriplets(cardValueMap: Map<string, number>, expectedNumberOfPairs: number, expectedNumberOfTriplets: number): boolean {
    const valueOccurrences = Array.from(cardValueMap.values());

    const numberOfPairs = valueOccurrences.reduce((count, value) => count + (value === 2 ? 1: 0), 0);
    const numberOfTriplets = valueOccurrences.reduce((count, value) => count + (value === 3 ? 1: 0), 0);

    return numberOfPairs === expectedNumberOfPairs && numberOfTriplets === expectedNumberOfTriplets;
}