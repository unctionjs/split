
import split from "./index";

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
