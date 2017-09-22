import equals from "@unction/equals"

export default function split (delimiter: string): Function {
  const equalsDelimiter = equals(delimiter)

  return function splitDelimiter (text: string): Array<StringType> {
    return text.split(delimiter)
  }
}
