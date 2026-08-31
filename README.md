# Pokédex TypeScript Lite

## Sobre o projeto

O Pokédex TypeScript Lite é uma aplicação back-end simples em Node.js com TypeScript que consulta a PokeAPI e organiza os resultados em um catálogo local durante a execução do programa.

## Objetivo

Praticar os principais conceitos do Módulo 01: Node.js, TypeScript, interfaces, funções tipadas, arrays, objetos, JSON, métodos de array, classes, async/await, fetch, tratamento de erros, GitHub, GitFlow e Kanban.

## Tecnologias utilizadas

- Node.js
- TypeScript
- TSX
- PokeAPI

## Pré-requisitos

- Node.js
- npm
- Git

## Como instalar

Clone o repositório:
git clone https://github.com/ranyzZ/pokedex-typescript-lite.git

Acesse a pasta do projeto:
cd pokedex-typescript-lite

Instale as dependências:
npm install

## Como executar

npm run dev

## Funcionalidades

- Buscar Pokémon por nome ou ID
- Tratar erro de Pokémon inexistente
- Adicionar Pokémon ao catálogo local
- Impedir Pokémon duplicado
- Listar catálogo
- Remover Pokémon por ID

## Exemplos de execução

Busca válida:

Entrada: pikachu

Saída:
[OK] Pokémon encontrado: pikachu
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60

Busca inválida:

Entrada: pokemon-inexistente

Saída:
[ERRO] Pokémon não encontrado.

Duplicidade:

Entrada: adicionar pikachu duas vezes

Saída:
[AVISO] pikachu já está no catálogo.

Remoção:

Entrada: remover ID 25

Saída:
[OK] Pokémon removido do catálogo.

## Estrutura do projeto

src/
├── main.ts
├── models/
│   ├── Pokemon.ts
│   └── catalogos.ts
└── services/
    └── PokeApiService.ts

## Conceitos aplicados

TypeScript: tipos primitivos, interfaces, parâmetros tipados e retornos tipados.

Métodos de array: map, find, some, forEach e filter.

Classe CatalogoPokemon: atributo privado pokemons e métodos adicionar, listar, remover e getTodos.

Fetch e async/await: consulta à PokeAPI com tratamento de erros.

## Branches utilizadas

- main
- develop
- feat/pokeapi
- feat/catalogo

## Link do Kanban

https://github.com/users/ranyzZ/projects/2

## Melhorias futuras

- Criar menu interativo no terminal
- Salvar catálogo em arquivo JSON
- Criar filtros por tipo de Pokémon

---

Desenvolvido por Rani Cavalcante Silva