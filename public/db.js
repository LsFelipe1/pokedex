const DB_NAME = "pokedexDB";
const DB_VERSION = 1;
const STORE_NAME = "pokemons";

function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('PokemonDB', 1);

        request.onerror = (event) => {
            console.error('Erro ao abrir o IndexedDB:', event.target.errorCode);
            reject(event.target.error);
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;

            // Cria o objectStore com o campo 'id' como chave primária
            if (!db.objectStoreNames.contains('pokemon')) {
                db.createObjectStore('pokemon', { keyPath: 'id' });
            }
        };
    });
}

// Salva uma lista de Pokémon no banco
export async function savePokemonToDB(pokemonList) {
    const db = await openDB();
    const transaction = db.transaction(['pokemon'], 'readwrite');
    const store = transaction.objectStore('pokemon');

    pokemonList.forEach(pokemon => {
        store.put(pokemon); // 'id' já será usado como chave
    });

    return new Promise((resolve, reject) => {
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
    });
}

// Carrega todos os Pokémon armazenados no banco
export async function loadPokemonFromDB() {
    const db = await openDB();
    const transaction = db.transaction(['pokemon'], 'readonly');
    const store = transaction.objectStore('pokemon');

    return new Promise((resolve, reject) => {
        const request = store.getAll();

        request.onsuccess = () => {
            resolve(request.result);
        };

        request.onerror = () => {
            reject(request.error);
        };
    });
}