# Pokédex - Catálogo Interativo de Pokémons

## Descrição

A **Pokédex** é uma Pokédex interativa desenvolvida para listar e filtrar Pokémons em tempo real utilizando a [PokeAPI](https://pokeapi.co/). O projeto tem como objetivo principal oferecer uma interface intuitiva para que usuários possam pesquisar Pokémons por nome, ID, tipo, geração ou favoritos.

Essa aplicação é útil tanto para fãs da franquia quanto para desenvolvedores que desejam estudar manipulação de DOM, consumo de APIs e criação de filtros dinâmicos.

---

## Funcionalidades

- **Visualização de Pokémon**: Exibe até 649 Pokémon (da 1ª à 5ª geração) em cards com nome, ID, tipos e imagens (estáticas e animadas ao passar o mouse sobre elas).
- **Pesquisa por nome, ID ou tipo**: sistema de busca responsivo e em tempo real.
- **Favoritos**: Permite favoritar/desfavoritar Pokémon com um ícone de estrela, salvando as escolhas no localStorage.
- **Filtro por geração e favoritos**: permite alternar entre diferentes gerações e exibir Pokémons marcados como favoritos.
- **Criação dinâmica de cards**: os Pokémons são exibidos com cards personalizados gerados com `createElement()` e `innerHTML`.
- **Cache Local**: Usa um banco de dados local (via db.js) para armazenar dados da API, reduzindo requisições.
- **Tipagem com Gradiente**: Cada card tem um fundo com gradiente baseado nos tipos do Pokémon.
- **Navegação**: Clique em um card para acessar uma página de detalhes do Pokémon.

---

## Tecnologias Utilizadas

**JavaScript (ES6+)**: Para lógica de fetch, manipulação do DOM e interatividade.

**HTML5**: Estrutura dos cards e loader.

**CSS3**: Estilização com gradientes, animações e layout responsivo.

**Node.js/Express**: Servidor local pa

**PokéAPI**: Fonte de dados para informações dos Pokémon.

**LocalStorage**: Persistência de favoritos.

**IndexedDB**: Cache de dados da API.

---

## Instalação

Pré-requisitos
Antes de começar, você precisa ter o Node.js instalado em sua máquina.

Passo a passo
Clone o repositório:

git clone https://github.com/SEU_USUARIO/pokex.git

*Acesse a pasta do projeto:*

cd pokex

*Instale as dependências necessárias:*

npm install

*Inicie o servidor local com Express:*

node index.js

*Acessando o projeto*
Abra o navegador e vá até:

http://localhost:3000

   *Ou a porta que estiver definida no seu index.js.*

## Como Usar

Utilize a barra de busca para encontrar Pokémons por nome, ID ou tipo.

Clique nos botões de geração (Gen 1 a Gen 5) para aplicar filtros por geração.

Marque Pokémons como favoritos e filtre por eles usando o botão "⭐ Favoritos".

Personalize os estilos e funcionalidades conforme seu projeto ou necessidade.

## Funcionalides futuras

- Melhoria na responsividade

- Melhoria de usabilidade

- Adição de frameworks como React (para melhorar as rotas dos pokemóns) e TailWind para melhor responsividade e suporte

- Adicionar novos filtros (Região, ordenação alfabética e por ID)

-  Armazenamento dos favoritos em um banco de dados

- Mais informações sobre os pokemóns, como: Moves, local onde encontrado, e qual geração pertence
   

## Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](./license.txt) para mais informações.

Contato
Desenvolvido por Luis Felipe – entre em contato:

Email: [felipetorres2017g@gmail.com](mailto:felipetorres2017g@gmail.com)

GitHub: [@LsFelipe1](https://github.com/LsFelipe1)
