const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
let currentPokemonId = 1;

const fetchJson = url => fetch(url).then(response => response.json());

const changeContent = (id, content, isImage = false) => {
  document.getElementById(id)[isImage ? 'src' : 'innerText'] = content;
};

const showPokemon = async id => {
  const details = await fetchJson(`${apiUrl}${id}`);
  changeContent('name', details.name);
  changeContent('img_sprite_front_default', details.sprites.front_default, true);
};

const previousPokemon = () => {
  currentPokemonId = (currentPokemonId === 1) ? 1 : currentPokemonId - 1;
  showPokemon(currentPokemonId);
};

const nextPokemon = () => {
  currentPokemonId++;
  showPokemon(currentPokemonId);
};

document.addEventListener('DOMContentLoaded', () => showPokemon(currentPokemonId));
