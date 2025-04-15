import { renderPokemon } from './main.js';
import { allPokemon, favorities }  from './main.js';
import { pokemonGen1,pokemonGen2, pokemonGen3, pokemonGen4, pokemonGen5 } from './main.js';

console.log(favorities);

function dropDown() {
    document.getElementById("dropdownDiv").classList.toggle("show");
}

const dropDownButton = document.getElementById('dropbtn');
dropDownButton.addEventListener('click', dropDown)

// Filtro de pesquisa
const searchInput = document.querySelector("#search");
searchInput.addEventListener("keyup", filterPokemon);

    //filtro pelos botões (toggle)
    const genButtons = document.querySelectorAll(".btnGen");
    genButtons.forEach(button => {
        button.addEventListener("click", () => {
        button.classList.toggle("active");
        filterPokemon();
    });
});

    function filterPokemon() {
        const searchValue = searchInput.value.toLowerCase();
        const activeGens = Array.from(genButtons)
        .filter(button => button.classList.contains("active"))
        .map(button => button.getAttribute("data-gen"));

        const filteredData = allPokemon.filter(poke => {
            const name = poke.name.toLowerCase();
            const id = poke.id.toString().padStart(3, '0');
            const types = poke.types.map(type => type.type.name.toLowerCase()).join(' '); 
            
        let genMatch = activeGens.length === 0;
        if (activeGens.length > 0) {
            genMatch = false;
            const isGen1 = poke.id <= pokemonGen1 && activeGens.includes("1");
            const isGen2 = poke.id > pokemonGen1 && poke.id <= pokemonGen2 && activeGens.includes("2");
            const isGen3 = poke.id > pokemonGen2 && poke.id <= pokemonGen3 && activeGens.includes("3");
            const isGen4 = poke.id > pokemonGen3 && poke.id <= pokemonGen4 && activeGens.includes("4");
            const isGen5 = poke.id > pokemonGen4 && poke.id <= pokemonGen5 && activeGens.includes("5");
            const isFavorite = favorities.includes(poke.id) && activeGens.includes("favorite");

            genMatch = isGen1 || isGen2 || isGen3 || isGen4 || isGen5 || isFavorite;
        }

        const searchMatch = (
        name.includes(searchValue) ||
        id.includes(searchValue) ||
        types.includes(searchValue)
    );

        return genMatch && searchMatch;
    });
    renderPokemon(filteredData); // Renderizar apenas os Pokémon filtrados
    }