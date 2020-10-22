function exchange<T>(array: T[], iIndex: number, jIndex: number): T[] {
  let clonedArray = cloneArray(array);
  clonedArray.splice(iIndex, 1, array[jIndex]);
  clonedArray.splice(jIndex, 1, array[iIndex]);
  return clonedArray;
}

function cloneArray<T>(arr: T[]): T[] {
  const clonedArr = [...arr];
  return clonedArr;
}

export const _ = {
  cloneArray,
  exchange
};
