import {TextType} from "./types";

export default function split (delimiter: TextType) {
  return function splitDelimiter (text: TextType | RegExp): Array<TextType> {
    return text.split(delimiter);
  };
}
