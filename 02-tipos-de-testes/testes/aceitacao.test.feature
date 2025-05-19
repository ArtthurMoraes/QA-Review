Feature: Login do usuário
  Como um usuário registrado
  Quero poder fazer login
  Para acessar minha área restrita

  Scenario: Login com credenciais válidas
    Given o usuário acessa a página de login
    When o usuário digita usuário "joao" e senha "123456"
    And clica no botão de login
    Then o sistema redireciona para a área do usuário