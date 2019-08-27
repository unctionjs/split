export default function split (delimiter) {
  return function splitDelimiter (text) {
    return text.split(delimiter);
  };
}
