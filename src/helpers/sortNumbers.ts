const sortNumbers = (arrayNumbers: number[]): number[] => {
  const newArray = arrayNumbers.sort((num1, num2) => num1 - num2);
  return newArray;
};

export default sortNumbers;
