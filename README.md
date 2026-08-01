# Joguinhos Front

Este projeto é um hub para jogos de palavras e desafios interativos, começando com experiências do tipo Termo/Wordle e com espaço para expandir para outros joguinhos no futuro.

A ideia é reunir diferentes jogos em uma interface única, com uma estrutura organizada para facilitar a evolução do projeto.

## Objetivo

O aplicativo tem como proposta central ser um portal de joguinhos, onde cada jogo pode ter:

- lógica própria;
- interface específica;
- componentes reutilizáveis;
- estilo visual consistente.

No momento, o projeto já inclui uma implementação inicial do jogo Vocabulo, e a estrutura foi pensada para permitir a inclusão de novos jogos de forma modular.

## Estrutura das pastas

A organização atual do projeto está dividida em pastas com responsabilidades específicas:

### src/

Pasta principal com o código-fonte da aplicação.

### src/routes/

Configuração das rotas do projeto.

### src/assets/

Armazena arquivos estáticos reutilizados pela interface, como:

- imagens;
- ícones;
- outros recursos visuais.

### src/components/

Diretório para componentes globais e reutilizáveis, ou seja, partes da interface que podem ser usadas em diferentes telas ou jogos.

Exemplos de uso:

- botões;
- cards;
- wrappers de layout;
- componentes de UI compartilhados.

### src/features/

Agrupa as funcionalidades principais do projeto por domínio.

No momento, existe uma estrutura voltada para o jogo Vocabulo, com pastas como:

- features/vocabulo/: lógica e UI do jogo;
- features/vocabulo/components/: componentes específicos do jogo;
- features/vocabulo/hooks/: hooks com a lógica do estado e comportamento;
- features/vocabulo/types/: tipos TypeScript usados pelo jogo.

Essa pasta é ideal para separar cada jogo ou funcionalidade principal do projeto.

### src/styles/

Contém estilos globais e reutilizáveis da aplicação.

Aqui podem ficar:

- estilos base;
- tema;
- resets;
- estilos compartilhados entre telas e componentes.

### src/utils/

Pasta para funções utilitárias e helpers reutilizáveis.

Exemplos:

- formatação de dados;
- validações;
- helpers genéricos;
- funções auxiliares para lógica do app.

## Como o projeto está organizado hoje

A ideia principal é manter o projeto dividido em camadas:

- features: jogos e funcionalidades principais;
- components: componentes compartilhados;
- styles: estilos globais;
- assets: recursos visuais;
- utils: funções auxiliares.

Isso torna mais simples adicionar novos joguinhos futuramente sem misturar lógica, layout e estilo em um único lugar.

## Como rodar o projeto

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

## Próximos passos

- adicionar mais jogos ao hub;
- criar componentes globais mais reutilizáveis;
- organizar melhor a UI compartilhada entre os diferentes joguinhos;
- evoluir a estrutura para suportar vários jogos sem aumentar a complexidade.
