// Teste Unitário
function soma(a, b) {
  return a + b;
}

test('soma 2 + 3 = 5', () => {
  expect(soma(2, 3)).toBe(5);
});