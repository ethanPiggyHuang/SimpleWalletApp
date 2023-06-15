export const shortenText = (text: string) => {
  const headLength = 6;
  const tailLength = 7;
  if (text.length <= headLength + tailLength) return text;
  const textArray = Array.from(text);
  const abbreviate = '...';

  const shorten = [
    ...textArray.slice(0, headLength),
    abbreviate,
    ...textArray.slice(text.length - tailLength),
  ];

  return shorten.join('');
};

export const addDecimalPoint = (rawNumber: bigint, decimal: bigint) => {
  const numberString = rawNumber?.toString();
  const numberArray = Array.from(numberString);
  numberArray.splice(numberArray.length - Number(decimal), 0, '.');
  return numberArray.join('');
};
