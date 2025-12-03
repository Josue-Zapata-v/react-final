const BASE_URL = 'https://dragonball-api.com/api';

export const api = {
  getAllCharacters: async (page = 1, limit = 10) => {
    const response = await fetch(`${BASE_URL}/characters?page=${page}&limit=${limit}`);
    if (!response.ok) throw new Error('Error al cargar personajes');
    return response.json();
  },

  getCharacterById: async (id) => {
    const response = await fetch(`${BASE_URL}/characters/${id}`);
    if (!response.ok) throw new Error('Error al cargar personaje');
    return response.json();
  },

  searchCharacters: async (name) => {
    const response = await fetch(`${BASE_URL}/characters?name=${name}`);
    if (!response.ok) throw new Error('No se encontraron personajes');
    return response.json();
  },
};
