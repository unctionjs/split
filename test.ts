
import split from "./index";

test("works", () => {
  expect(split(" ")("a b")).toEqual(["a", "b"]);
});

test("works", () => {
  expect(split(" ")("a  b")).toEqual(["a", "", "b"]);
});

test("works", () => {
  expect(split("")("a b")).toEqual(["a", " ", "b"]);
});

test("works", () => {
  expect(split("---")("a---b")).toEqual(["a", "b"]);
});


test("works", () => {
  expect(split(/-+/)("a---b")).toEqual(["a", "b"]);
});
