import filmService from '/js/service/filmService.js';
import filmView from '/js/view/filmView.js';

async function init() {
  const characters = await filmService.getCharacters();
  filmView.render(characters);
};

export default { init };
