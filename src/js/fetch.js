const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34156282-343c92e46785d2b4bc24aa67e';

export async function fetch(page, query) {
  const response = await fetch(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
}
