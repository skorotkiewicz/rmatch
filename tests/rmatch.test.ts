import { rmatch } from "@src/index";

test("rmatch", () => {
  let age = 8;
  rmatch<number>(age, [
    [
      (val: number) => val >= 1 && val <= 18,
      () => console.log("Important Birthday"),
    ],
    [
      (val: number) => val === 21 || val === 50,
      () => console.log("Important Birthday"),
    ],
    [
      (val: number) => val >= 65 && val <= Number.MAX_SAFE_INTEGER,
      () => console.log("Important Birthday"),
    ],
    [() => true, () => console.log("Not an Important Birthday")], // Default
  ]);
});
