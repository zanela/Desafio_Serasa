# Prova - Analista de Garantia de Qualidade | Serasa Experian

## 📋 Descrição

Este projeto consiste em testes automatizados utilizando o **Cypress** para interagir com a **API do Trello**.  
O objetivo é validar operações de criação e exclusão de boards e cards na plataforma.

---

## 🛠️ Tecnologias utilizadas

- Node.js
- Cypress
- Trello API
- Dotenv para variáveis de ambiente

---

## ⚙️ Configuração do ambiente

### 1. Clonar o repositório


git clone https://github.com/seu-usuario/Desafio tecnico Serasa.git
Desafio tecnico Serasa
2. Instalar dependências

npm install
🔑 Configurar variáveis de ambiente
Na raiz do projeto, crie um arquivo .env.

Insira as seguintes informações:

dotenv

TRELLO_KEY=sua_chave_aqui
TRELLO_TOKEN=ATATT3xFfGF0BDvldhL8OrSG2JHapPvHWbf4e5yY6LCytdRVLTfbcPiqQezlKuukuFRdibOIrs8vnxi35MjQ_wyaI1cX8rGbfs_JB4PxsL-smCiEApdZoMmuU8WSqNpd1J3xw6Qu0Z_EZLORoqOie_QxZg741jGnizDBX4neCPGQJxRBaGLlVZ4=1119F070

Como obter sua Key e Token:

Acesse: https://trello.com/app-key

Gere a Key e clique no link para gerar o Token.

Aceite as permissões solicitadas.

🚀 Como executar os testes
Abra o Cypress com interface gráfica:

npx cypress open
Ou execute em modo headless (terminal):

npx cypress run
No Cypress, selecione o arquivo de testes:
cypress/e2e/trello-api.spec.js

✅ Funcionalidades automatizadas
✅ Criar um board no Trello

✅ Criar uma lista dentro do board

✅ Criar um card dentro da lista

✅ Excluir o card

✅ Excluir o board
