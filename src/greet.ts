export type GreetSpec = {
  shout?: string;
  whom?: string;
};

export function greet(spec?: GreetSpec): string {
  const { shout = 'Hello', whom = 'World' } = spec || {};
  return `${shout}!!!, ${whom}!`;
}
