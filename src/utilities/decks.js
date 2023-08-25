import sendRequest from './send-request';

const BASE_URL = '/api/decks';

export async function getAllDecks() {
  return sendRequest(BASE_URL);
}

export async function getAllDecksByUserId(userId, deckId) {
  return sendRequest(`${BASE_URL}/${userId}/${deckId}`);
}

export async function getOneDeckByUserId(userId) {
  return sendRequest(`${BASE_URL}/${userId}`);
}

export async function createDeck() {
  return sendRequest(`${BASE_URL}/create`);
}

export async function addCardsToDeck(deckId) {
  return sendRequest(`${BASE_URL}/${deckId}/addCard`);
}

export async function deleteCardsToDeck(deckId) {
  return sendRequest(`${BASE_URL}/${deckId}/deleteCard`);
}
export async function deleteDeck(deckId) {
  return sendRequest(`${BASE_URL}/${deckId}`);
}

