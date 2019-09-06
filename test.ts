
import split from "./index.ts";

test(() => {
  expect(split(" ")("a b")).toEqual(["a", "b"]);
});

test(() => {
  expect(split(" ")("a  b")).toEqual(["a", "", "b"]);
});

test(() => {
  expect(split("")("a b")).toEqual(["a", " ", "b"]);
});

test(() => {
  expect(split("---")("a---b")).toEqual(["a", "b"]);
});


test(() => {
  expect(split(/-+/)("a---b")).toEqual(["a", "b"]);
});
