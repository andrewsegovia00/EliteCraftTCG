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

export async function getOneDeckByUserId(userId, deckId) {
    console.log('3--we pass through here, in the utilities')
  return sendRequest(`${BASE_URL}/${userId}/${deckId}`);
}

export async function createDeck(deckData) {
    console.log('4--we pass through here, in the utilities')
    console.log(deckData)
    console.log('We left the utilities page')
    return sendRequest(`${BASE_URL}/create`, 'POST', deckData);
  }
  

export async function addCardToDeck(deckId, cardId) {
    console.log('5--we pass through here, in the utilities')
    console.log(deckId, cardId)
    const requestData = { deckId, cardId }
  return sendRequest(`${BASE_URL}/${deckId}/addCard/${cardId}`, 'POST', requestData );
}

// export async function deleteCardsToDeck(deckId) {
//     console.log('6--we pass through here, in the utilities')
//   return sendRequest(`${BASE_URL}/${deckId}/deleteCard`);
// }

export async function deleteDeck(deckObj) {
    console.log('7--we pass through here, in the utilities')
    console.log(deckObj)
  return sendRequest(`${BASE_URL}/delete/${deckObj.deckId}`, 'POST', deckObj);
}
  
// export async function getOneDeckByUserId(deckId) {
//     console.log('8--we pass through here, in the utilities')
//     console.log('we are in the utilities file')
//     // const requestData = {deckId}
//     // deckId = {deckId} 
//     console.log(deckId)
//   return sendRequest(`${BASE_URL}/one/${deckId}`, deckId);
// }

export async function updateDeck(deckId, title) {
  console.log(deckId)
  console.log(title)
  const requestData = {deckId, title}
    console.log('9--we pass through here, in the utilities')
  return sendRequest(`${BASE_URL}/update/${deckId}`, 'POST', requestData);
}