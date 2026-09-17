# Pokédex TypeScript Lite

## Sobre o projeto

O Pokédex TypeScript Lite é uma aplicação back-end em Node.js com TypeScript que consulta a PokeAPI e organiza os resultados em um catálogo local durante a execução do programa. O usuário interage por um menu no terminal.

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

- Menu interativo no terminal
- Buscar Pokémon por nome ou ID
- Tratar erro de Pokémon inexistente
- Adicionar Pokémon ao catálogo local
- Impedir Pokémon duplicado
- Listar catálogo
- Remover Pokémon por ID
- Persistência do catálogo em pc_box.json

## Exemplos de execução

Menu interativo:

===== POKÉDEX TYPESCRIPT LITE =====
1 - Buscar e adicionar Pokémon
2 - Listar catálogo
3 - Remover Pokémon por ID
0 - Sair
Escolha uma opção: 1
Digite o nome ou ID do Pokémon: pikachu
[OK] pikachu adicionado ao catálogo.

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
├── controllers/
│   └── TerminalController.ts
├── models/
│   ├── Pokemon.ts
│   └── catalogos.ts
└── services/
    ├── PokeApiService.ts
    └── BoxService.ts

## Conceitos aplicados

TypeScript: tipos primitivos, interfaces, parâmetros tipados e retornos tipados.

Métodos de array: map, find, some, forEach e filter.

Classe CatalogoPokemon: atributo privado pokemons e métodos adicionar, listar, remover e getTodos.

Classe TerminalController: menu interativo com readline.

Classe BoxService: persistência do catálogo em pc_box.json com fs/promises.

Fetch e async/await: consulta à PokeAPI com tratamento de erros.

## Branches utilizadas

- main
- develop
- feat/pokeapi
- feat/catalogo

## Link do Kanban

https://github.com/users/ranyzZ/projects/2

## Melhorias futuras

- Criar filtros por tipo de Pokémon
- Exibir mais estatísticas (HP, ataque, defesa)
- Criar uma API própria com Express

---

Desenvolvido por Rani Cavalcante Silva