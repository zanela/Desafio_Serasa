const apiKey =teste_serasa.env('TRELLO_KEY');
const apiToken =teste_serasa.env('TRELLO_TOKEN');

let boardId = '';
let listId = '';
let cardId = '';

describe('Automação com Trello API', () => {


  it('Cadastrar um board', () => {
    cy.request({
      method: 'POST',
      url: `https://api.trello.com/1/boards/?name=BoardTeste&key=${apiKey}&token=${apiToken}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      boardId = response.body.id;
      cy.log(`Board criado: ${boardId}`);
    });
  });

  it('Criar uma lista no board', () => {
    cy.request({
      method: 'POST',
      url: `https://api.trello.com/1/lists?name=ListaTeste&idBoard=${boardId}&key=${apiKey}&token=${apiToken}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      listId = response.body.id;
      cy.log(`Lista criada: ${listId}`);
    });
  });

  it('Cadastrar um card na lista', () => {
    cy.request({
      method: 'POST',
      url: `https://api.trello.com/1/cards?idList=${listId}&name=CardTeste&key=${apiKey}&token=${apiToken}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      cardId = response.body.id;
      cy.log(`Card criado: ${cardId}`);
    });
  });

  it('Excluir um card', () => {
    cy.request({
      method: 'DELETE',
      url: `https://api.trello.com/1/cards/${cardId}?key=${apiKey}&token=${apiToken}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(`Card excluído: ${cardId}`);
    });
  });

  it('Excluir um board', () => {
    cy.request({
      method: 'DELETE',
      url: `https://api.trello.com/1/boards/${boardId}?key=${apiKey}&token=${apiToken}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(`Board excluído: ${boardId}`);
    });
  });

});

