Funcionalidade: Funcionalidades do Aplicativo Bancário

  Contexto:
    Dado que o usuário possui uma conta ativa no aplicativo bancário

  Cenário: Login bem-sucedido
    Quando o usuário informa credenciais válidas
    Então o sistema permite o acesso ao aplicativo

  Cenário: Login inválido
    Quando o usuário informa credenciais inválidas
    Então o sistema exibe uma mensagem de erro informando falha na autenticação

  Cenário: Consulta de saldo
    Dado que o usuário está autenticado
    Quando o usuário acessa a funcionalidade de consulta de saldo
    Então o sistema exibe o saldo atualizado da conta

  Cenário: Transferência com saldo suficiente
    Dado que o usuário está autenticado e possui saldo suficiente
    Quando o usuário realiza uma transferência bancária
    Então o sistema confirma a realização da transferência

  Cenário: Transferência com saldo insuficiente
    Dado que o usuário está autenticado e não possui saldo suficiente
    Quando o usuário tenta realizar uma transferência bancária
    Então o sistema bloqueia a operação e exibe uma mensagem de saldo insuficiente

  Cenário: Pagamento de conta
    Dado que o usuário está autenticado
    Quando o usuário realiza o pagamento de uma conta
    Então o sistema confirma a realização do pagamento

  Cenário: Visualização de extrato
    Dado que o usuário está autenticado
    Quando o usuário acessa a funcionalidade de extrato bancário
    Então o sistema exibe o histórico das últimas movimentações

  Cenário: Autenticação em dois fatores
    Dado que o usuário iniciou o processo de login
    Quando o sistema solicita a confirmação via código enviado por SMS
    Então o usuário informa o código e o sistema libera o acesso

  Cenário: Sessão expirada
    Dado que o usuário está autenticado
    Quando o usuário permanece inativo por um tempo prolongado
    Então o sistema encerra a sessão automaticamente

  Cenário: Erro de conexão
    Dado que o usuário está utilizando o aplicativo
    Quando ocorre uma falha na conexão com a internet
    Então o sistema exibe uma mensagem de erro de conexão
