let characters = null;

async function fetchData() {
    if (!characters) {
        const response = await fetch('https://api.brawlapi.com/v1/brawlers');
        characters = await response.json();
    }
    return characters;
}

async function getCharacter(index) {
    if (!characters) {
        await fetchData();
    }
    return characters[index];
}

async function getCharacters() {
    if (!characters) {
        await fetchData();
    }
    return characters;
}

export default { getCharacter, getCharacters };