// Teste de Integração
function login(username, password) {
  return autenticarUsuario(buscarUsuario(username), password);
}

function buscarUsuario(username) {
  return { username: username, password: 'senha123' };
}

function autenticarUsuario(user, password) {
  return user.password === password;
}

test('Login com usuário e senha corretos', () => {
  expect(login('arthur', 'senha123')).toBe(true);
});