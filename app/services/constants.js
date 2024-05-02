export const generateYearsData = (startingValue, endingValue) => {
  let yearArray = [];

  for (let i = startingValue; i <= endingValue; i++) {
    yearArray.push({
      title: i.toString(),
      value: i.toString(),
    });
  }
  return yearArray;
};
