import { add } from "./math";

describe("add", () => {
  describe("when given negative numbers", () => {
    it("should return 0 when passed 2 and -2", () => {
      expect(add(2, -2)).toBe(0);
    });
  });

  it("should return 4 when passed 2 + 2", () => {
    const result = add(2, 2);
    expect(result).toBe(4);
  });

  it("should return 5 when passed 2 + 3", () => {
    const result = add(2, 3);
    expect(result).toEqual(5);
  });
});
