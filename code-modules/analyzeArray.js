export const analyzeArray = {
  average(array) {
    let result = 0;

    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    let average = result / array.length;
    return average;
  },

  min(array) {
    const min = Math.min(...array);
    return min;
  },

  max(array) {
    const max = Math.max(...array);
    return max;
  },

  length(array) {
    return array.length;
  },
};
