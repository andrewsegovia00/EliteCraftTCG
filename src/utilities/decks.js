import sendRequest from './send-request';

const BASE_URL = '/api/decks';

// export async function getAllDecks() {
//     console.log('1--we pass through here, in the utilities')
//   return sendRequest(BASE_URL);
// }

export async function getAllDecksByUserId(userId) {
    console.log('2--we pass through here, in the utilities')
  return sendRequest(`${BASE_URL}/${userId}/`);
}

// export async function getOneDeckByUserId(userId, deckId) {
//     console.log('3--we pass through here, in the utilities')
//   return sendRequest(`${BASE_URL}/${userId}/${deckId}`);
// }

export async function createDeck(deckData) {
    console.log('4--we pass through here, in the utilities')
    console.log(deckData)
    console.log('We left the utilities page')
    return sendRequest(`${BASE_URL}/create`, 'POST', deckData);
  }
  

// export async function addCardsToDeck(deckId) {
//     console.log('5--we pass through here, in the utilities')
//   return sendRequest(`${BASE_URL}/${deckId}/addCard`);
// }

// export async function deleteCardsToDeck(deckId) {
//     console.log('6--we pass through here, in the utilities')
//   return sendRequest(`${BASE_URL}/${deckId}/deleteCard`);
// }

export async function deleteDeck(deckObj) {
    console.log('7--we pass through here, in the utilities')
    console.log(deckObj)
  return sendRequest(`${BASE_URL}/delete/${deckObj.deckId}`, 'POST', deckObj);
}
  
