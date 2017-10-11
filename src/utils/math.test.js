import { add } from "./math";

it.only("should return 4 when passed 2 + 2", () => {
  const result = add(2, 2);
  expect(result).toEqual(4);
});
