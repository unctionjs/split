export default function split (delimiter: StringType): Function {
  return function splitDelimiter (text: StringType | Regexp): Array<StringType> {
    return text.split(delimiter)
  }
}
