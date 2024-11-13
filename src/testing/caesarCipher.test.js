describe("caesarCipher", () => {
  test("wrapping from z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("case preservation", () => {
    expect(caesarCipher("HeLLo", 3).toBe("KhOOr"));
  });

  test("test punctuation, space", () => {
    expect(caesarCipher("Hello, World!", 3).toBe("Khoor, Zruog!"));
  });
});
