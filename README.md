# Aplicação de Votação

Este repositório contém o código para uma aplicação de votação construída com TypeScript e Fastify. Ela fornece funcionalidades para criar enquetes, obter detalhes das enquetes, votar nas enquetes e exibir resultados de enquetes em tempo real usando WebSockets.

## Instalação

1. Clone o repositório:

```https://github.com/leitecsleite/polls.git```


2. Instale as dependências:
```
cd enquetes
npm install

```


## Uso

Para executar a aplicação em modo de desenvolvimento:

```
npm run dev

```

Isso iniciará o servidor e observará alterações no arquivo `src/http/server.ts`.

## Dependências

- **[@fastify/cookie](https://www.npmjs.com/package/@fastify/cookie):** Plugin Fastify para análise de cookies.
- **[@fastify/websocket](https://www.npmjs.com/package/@fastify/websocket):** Plugin Fastify para suporte a WebSocket.
- **[@prisma/client](https://www.npmjs.com/package/@prisma/client):** Cliente Prisma para acesso ao banco de dados.
- **[@types/node](https://www.npmjs.com/package/@types/node):** Definições TypeScript para Node.js.
- **[crypto](https://www.npmjs.com/package/crypto):** Módulo Node.js para funções criptográficas.
- **[fastify](https://www.npmjs.com/package/fastify):** Estrutura web rápida e de baixa sobrecarga para Node.js.
- **[ioredis](https://www.npmjs.com/package/ioredis):** Cliente Redis robusto e focado em desempenho para Node.js.
- **[prisma](https://www.npmjs.com/package/prisma):** ORM Prisma para Node.js.
- **[tsx](https://www.npmjs.com/package/tsx):** Transpilador TypeScript.
- **[typescript](https://www.npmjs.com/package/typescript):** Compilador de linguagem TypeScript.
- **[zod](https://www.npmjs.com/package/zod):** Biblioteca de declaração e validação de esquema em TypeScript.

## Estrutura do Projeto

- **`src/`**: Contém o código-fonte da aplicação.
  - **`http/`**: Rotas HTTP e configuração do servidor.
    - **`server.ts`**: Arquivo principal do servidor.
    - **`routes/`**: Manipuladores de rotas HTTP.
      - **`create-poll.ts`**: Manipulador para criar enquetes.
      - **`get-poll.ts`**: Manipulador para obter detalhes das enquetes.
      - **`vote-on-poll.ts`**: Manipulador para votar nas enquetes.
    - **`ws/`**: Manipuladores de WebSocket.
      - **`poll-results.ts`**: Manipulador de WebSocket para resultados de enquetes em tempo real.
  - **`index.ts`**: Ponto de entrada para a aplicação.

## Licença

Este projeto está licenciado sob a Licença ISC. Consulte o arquivo [LICENSE](LICENSE) para obter detalhes.


