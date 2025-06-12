export function fibs(n) {
  if (n <= 0) return [];

  const arr = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    arr.push(a);
    [a, b] = [b, a + b];
    // Equivalent to:
    // const next = a + b;
    // a = b;
    // b = next;
  }

  return arr;
}

export function fibsRec(n) {
  // Base cases:
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const prev = fibsRec(n - 1);

  const last = prev[prev.length - 1];
  const secondLast = prev[prev.length - 2];

  const next = last + secondLast;

  return [...prev, next];
}

/*
fibsRec(8)
  → fibsRec(7)
    → fibsRec(6)
      → fibsRec(5)
        → fibsRec(4)
          → fibsRec(3)
            → fibsRec(2) → returns [0, 1]
            ← compute next = 1 + 0 → [0, 1, 1]
          ← compute next = 1 + 1 → [0, 1, 1, 2]
        ← compute next = 2 + 1 → [0, 1, 1, 2, 3]
      ← compute next = 3 + 2 → [0, 1, 1, 2, 3, 5]
    ← compute next = 5 + 3 → [0, 1, 1, 2, 3, 5, 8]
  ← compute next = 8 + 5 → [0, 1, 1, 2, 3, 5, 8, 13]
*/
