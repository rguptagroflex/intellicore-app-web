export const sortObjectArrayByProperty = <T extends Record<string, any>>(
  arr: T[],
  prop: keyof T
): T[] => {
  return arr.sort((a, b) =>
    a[prop] > b[prop] ? 1 : b[prop] > a[prop] ? -1 : 0
  );
};
