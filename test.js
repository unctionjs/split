/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import split from "./source.js"

test(({same, end}) => {
  same(
    split(" ")("a b"),
    ["a", "b"]
  )

  end()
})
