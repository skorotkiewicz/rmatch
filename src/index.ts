/**
 * Function inspired by Rust's match for pattern matching in JavaScript/TypeScript.
 *
 * @param value - The value to be matched against patterns.
 * @param patterns - An array of patterns, where each pattern is a tuple of two elements:
 *   - The first function checks if the value matches the pattern.
 *   - The second function executes when a match is found.
 * @returns The result of executing the matched pattern's function.
 * @throws {Error} If no match is found, and no default case is provided.
 *
 * @example
 * // Example usage:
 *
 * let age2 = 8;
 * rmatch<number>(age2, [
 *   [
 *     (val: number) => val >= 1 && val <= 18,
 *     () => console.log("Important Birthday"),
 *   ],
 *   [
 *     (val: number) => val === 21 || val === 50,
 *     () => console.log("Important Birthday"),
 *   ],
 *   [
 *     (val: number) => val >= 65 && val <= Number.MAX_SAFE_INTEGER,
 *     () => console.log("Important Birthday"),
 *   ],
 *   [() => true, () => console.log("Not an Important Birthday")], // Default
 * ]);
 *
 */
export function rmatch<T>(
  value: T,
  patterns: Array<[(val: T) => boolean, () => void]>
): void {
  for (const [condition, action] of patterns) {
    if (condition(value)) return action();
  }

  throw new Error("No matching pattern found and no default case provided.");
}
