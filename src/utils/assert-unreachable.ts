export const assertUnreachable = (x: never): never => {
  throw new Error(
    `Unreachable code has been reached with value ${x}. Have you called assertUnreachable from pure JS?`,
  );
};
