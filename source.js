/* eslint-disable no-magic-numbers */

import reduceValues from "@unction/reducevalues"
import equals from "@unction/equals"
import ifThenElse from "@unction/ifthenelse"
import append from "@unction/append"
import always from "@unction/always"
import flip from "@unction/flip"

export default function split (delimiter: string): Function {
  const equalsDelimiter = equals(delimiter)

  return reduceValues(
    (sections: Array<string>): Function =>
      ifThenElse(
        equalsDelimiter
      )(
        always(sections)
      )(
        flip(append)(sections)
      )
    )(
      []
    )
}
