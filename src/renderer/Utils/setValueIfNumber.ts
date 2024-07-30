/* eslint-disable no-restricted-globals */
export default function setValueIfNumber({
  newValue,
  setInput,
  validValue,
  setValidValue,
  min,
  max,
  digitsAfterDecimal,
}: {
  newValue: string;
  setInput: (value: string) => void;
  validValue: string;
  setValidValue: (value: string) => void;
  min: number;
  max: number;
  digitsAfterDecimal: number;
}): void {
  if (!newValue) {
    setValidValue(min.toString());
  } else if (isNaN(Number(newValue))) {
    setInput(validValue.toString());
  } else {
    const validVal = Math.max(
      min,
      Math.min(Number(parseFloat(newValue).toFixed(digitsAfterDecimal)), max),
    );
    setValidValue(validVal.toString());
    setInput(validVal.toString());
  }
}
