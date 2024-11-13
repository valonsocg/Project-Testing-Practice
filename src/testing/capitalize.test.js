import capitalize from "./capitalize";

test("capitalize first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});
