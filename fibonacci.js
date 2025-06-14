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
