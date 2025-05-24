export type GreetSpec = {
  shout?: string;
  whom?: string;
};

/**
 * Generates a greeting string.
 * @param spec - An optional GreetSpec object to customize the greeting.
 * @param spec.shout - The word to shout (e.g., "Hello", "Hi"). Defaults to "Hello".
 * @param spec.whom - The recipient of the greeting (e.g., "World", "Copilot"). Defaults to "World".
 * @returns A formatted greeting string, like "Hello!!!, World!".
 */
export function greet(spec?: GreetSpec): string {
  const { shout = '😺Hello', whom = 'World' } = spec || {};
  return `${shout}!!!, ${whom}!`;
}
