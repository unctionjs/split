import type {StringType} from "types"
import type {Regexp} from "types"
import type {UnaryFunctionType} from "types"

export default function split (delimiter: StringType | Regexp): UnaryFunctionType {
  return function splitDelimiter (text: StringType): ArrayType<StringType> {
    return text.split(delimiter)
  }
}
