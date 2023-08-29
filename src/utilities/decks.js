import sendRequest from './send-request';

const BASE_URL = '/api/decks';

export async function getAllDecks() {
  return sendRequest(BASE_URL);
}

export async function getAllDecksByUserId(userId) {
  return sendRequest(`${BASE_URL}/${userId}/`);
}

export async function getOneDeckByUserId(userId, deckId) {
  return sendRequest(`${BASE_URL}/${userId}/${deckId}`);
}

export async function createDeck(deckData) {
    return sendRequest(`${BASE_URL}/create`, 'POST', deckData);
  }
  

export async function addCardToDeck(deckId, cardId) {
    const requestData = { deckId, cardId }
  return sendRequest(`${BASE_URL}/${deckId}/addCard/${cardId}`, 'POST', requestData );
}

export async function deleteDeck(deckObj) {
  return sendRequest(`${BASE_URL}/delete/${deckObj.deckId}`, 'POST', deckObj);
}
  
export async function updateDeck(deckId, title) {
  const requestData = {deckId, title}
  return sendRequest(`${BASE_URL}/update/${deckId}`, 'POST', requestData);
}