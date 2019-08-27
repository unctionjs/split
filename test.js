
import {test} from "tap";

import split from "./";

test(({same, end}) => {
  same(
    split(" ")("a b"),
    ["a", "b"]
  );

  end();
});

test(({same, end}) => {
  same(
    split(" ")("a  b"),
    ["a", "", "b"]
  );

  end();
});

test(({same, end}) => {
  same(
    split("")("a b"),
    ["a", " ", "b"]
  );

  end();
});

test(({same, end}) => {
  same(
    split("---")("a---b"),
    ["a", "b"]
  );

  end();
});


test(({same, end}) => {
  same(
    split(/-+/)("a---b"),
    ["a", "b"]
  );

  end();
});
