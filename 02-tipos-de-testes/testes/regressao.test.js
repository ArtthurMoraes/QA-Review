// Teste de Regressão
function calcularDesconto(valor, percentual) {
  return valor - (valor * percentual);
}

test('Desconto de 10% em R$ 100 deve retornar R$ 90', () => {
  expect(calcularDesconto(100, 0.1)).toBe(90);
});

// Este teste garante que mudanças na função não quebrem o comportamento esperado