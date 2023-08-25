import sendRequest from './send-request';

const BASE_URL = '/api/cards';

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function getAllCardsBySetId(setId) {
  return sendRequest(`${BASE_URL}/${setId}`);
}

