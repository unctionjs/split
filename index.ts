import {string} from "./types";

export default function split (delimiter: string) {
  return function splitDelimiter (text: string | RegExp): Array<string> {
    return text.split(delimiter);
  };
}
