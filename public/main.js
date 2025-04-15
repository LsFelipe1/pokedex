import { savePokemonToDB, loadPokemonFromDB } from "./db.js";
const pokeContainer = document.querySelector("#pkmContainer");
const pokemonGen1 = 151;
const pokemonGen2 = 251;
const pokemonGen3 = 386;
const pokemonGen4 = 493;
const pokemonGen5 = 649;
const pokemonGen6 = 650;
const pokemonGen7 = 722;
const pokemonGen8 = 810;
const pokemonGen9 = 906;

const colors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#ff4eee',
};

const favorities = JSON.parse(localStorage.getItem('favoritePokemon') || '[]');
const mainType = Object.keys(colors);
const secondType = Object.keys(colors);

// Lista global para armazenar todos os Pokémon
let allPokemon = [];

    const loader = document.getElementById('loader');
    const container = document.getElementById('pkmContainer');

const fetchPokemon = async () => {

    //esconde os cards
    loader.classList.remove('hidden');
    container.classList.add('hidden');

    try {
        const cachedPokemon = await loadPokemonFromDB();
        if (cachedPokemon.length > 0) {
            allPokemon = cachedPokemon;
            renderPokemon(allPokemon);
        } else {
            const url = `https://pokeapi.co/api/v2/pokemon?limit=${pokemonGen5}`;
            const resp = await fetch(url);
            const data = await resp.json();
            
            const promises = data.results.map(poke => 
                fetch(poke.url).then(res => res.json())
            );
            
            allPokemon = (await Promise.all(promises)).filter(p => p.id);
            await savePokemonToDB(allPokemon);
            renderPokemon(allPokemon);
        }
    } catch (error) {
        console.error('Erro ao carregar Pokémon:', error);
    } finally {
        // Esconder o loader e mostrar o container, independentemente de sucesso ou erro
        loader.classList.add('hidden');
        container.classList.remove('hidden');
    }
};


const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const resp = await fetch(url);
    const data = await resp.json();
};

    //dando função ao click na estrela, onde favorita-se o pokemon
    const toggleFavorite = (pokemonId, starElement) => {
        let favorities = JSON.parse(localStorage.getItem('favoritePokemon') || '[]');

        if (favorities.includes(pokemonId)) {
            //remove dos favoritos
            favorities = favorities.filter(id => id !== pokemonId);
            starElement.classList.remove('fa-solid', 'favorited');
            starElement.classList.add('fa-regular');
        } else {
            favorities.push(pokemonId);
            starElement.classList.remove('fa-regular');
            starElement.classList.add('fa-solid', 'favorited');
        }
        localStorage.setItem('favoritePokemon', JSON.stringify(favorities));
    };

    const createPkmCard = (poke) => {
    const card = document.createElement('div');
    card.classList.add("pkmCard");

    const name = poke.name[0].toUpperCase() + poke.name.slice(1);
    const id = poke.id.toString().padStart(3, '0');

    const pokeTypes = poke.types.map(type => type.type.name).join(' | ');
    const type = mainType.find(type => pokeTypes.indexOf(type) === 0); // Só pega o tipo na posição 0
    const secType = secondType.find(type => pokeTypes.indexOf(type) > pokeTypes.indexOf(' | ')) ?? ""; // Pega após o separador
    const color = colors[type];
    const colorsecond = secType ? colors[secType] : color; // Usa a mesma cor se não houver segundo tipo
    const gradientCard = secType ? `linear-gradient(120deg, ${color} 48%, ${colorsecond} 60%)` : color;

    card.style.background = gradientCard;

    let favorities = JSON.parse(localStorage.getItem('favoritePokemon') || '[]');
    const isFavorite = favorities.includes(poke.id);
    const starClass = isFavorite ? 'fa-solid fa-star favorited' : 'fa-regular fa-star';

    const pkmCardInnerHTML = `
        <div class="pkmImg">
            <img class="imgPkm" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png" alt="${name}">
            <img class="gifPkm" src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/versions/generation-v/black-white/animated/${poke.id}.gif" alt="${name}">
        </div>
        <div class="infoPkm">
            <span id="pkmId">${id}</span>
            <h2 id="pkmName">${name}</h2>
            <small class="pkmType" id="Type1"><span>${pokeTypes}</span></small>
            <i class="fa-regular fa-star"></i>
        </div>
    `;

    card.innerHTML = pkmCardInnerHTML;

    //adicionando toggle na estrela
    const star = card.querySelector('.fa-star');
    star.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(poke.id, star);
    });

    //redireciona para página do pkm baseado no id
    card.addEventListener('click', () => {
        window.location.href=`./infosPkm/pokemon.html?id=${poke.id}`;
    });
    return card;
};

const renderPokemon = (pokemonList) => {
    pokeContainer.innerHTML = ''; // Limpar container antes de renderizar
    pokemonList.forEach(poke => pokeContainer.appendChild(createPkmCard(poke)));
};

// Iniciar o fetch
fetchPokemon().catch(error => console.error(error));

export { renderPokemon }
export { allPokemon, favorities }
export { pokemonGen1,pokemonGen2, pokemonGen3, pokemonGen4, pokemonGen5 }