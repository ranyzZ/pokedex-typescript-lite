import { PokeApiService } from './services/PokeApiService';
import { CatalogoPokemon } from './models/catalogos';

async function main() {
    console.log('🎮 Pokédex TypeScript Lite\n');

    const pokeApi = new PokeApiService();
    const catalogo = new CatalogoPokemon();

    console.log('🔍 Buscando Pikachu...');
    const pikachu = await pokeApi.buscarPokemon('pikachu');
    if (pikachu) catalogo.adicionar(pikachu);

    console.log('\n🔍 Buscando Charmander...');
    const charmander = await pokeApi.buscarPokemon('charmander');
    if (charmander) catalogo.adicionar(charmander);

    console.log('\n🔍 Tentando adicionar Pikachu novamente...');
    const pikachu2 = await pokeApi.buscarPokemon('pikachu');
    if (pikachu2) catalogo.adicionar(pikachu2);

    console.log('\n🔍 Buscando Pokémon inexistente...');
    await pokeApi.buscarPokemon('pokemon-inexistente');

    console.log('\n📋 Listando catálogo...');
    catalogo.listar();

    console.log('\n🗑️ Removendo Pokémon ID 25 (Pikachu)...');
    catalogo.remover(25);

    console.log('\n📋 Listando catálogo após remoção...');
    catalogo.listar();
}

main();