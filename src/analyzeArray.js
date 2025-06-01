const analyzeArray = (arr) => {
  if (arr.length === 0) {
    return "Empty array";
  }

  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "Array has non-number elements";
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  return {
    average: sum / arr.length,
    min,
    max,
    length: arr.length,
  };
};

export default analyzeArray;
