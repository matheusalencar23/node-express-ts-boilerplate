Passo a passo para iniciar essa aplicação usando node, express e typescrypt

- Iniciar uma aplicação node com `npm init -y`

- Instalar as dependências básica para construir a aplicação com `npm install express cors dotenv`

- Instalar as depedências de desenvolvimento para auxiliar na construção da aplicação `npm install -D typescript nodemon ts-node @types/node @types/express @types/cors`

- Executar o comando `npx tsc --init` para criar o arquivo `tsconfig.json`

- No arquivo `tsconfig.json` adicionar a propriedade `"outDir": "./dist"` dentro de `"compilerOptions"`

- Criar 0 arquivo `.env `

- Criar o arquivo que vai iniciar sua aplicação dentro da pasta `src`, por exemplo `src/app.ts`

- Criar um arquivo `nodemon.json` na raíz do projeto com o seguinte conteúdo:

  ```
  {
      "watch": ["src"],
      "ext": "ts",
      "exec": "ts-node ./src/app.ts"
  }
  ```

- Adicionar ao arquivo `package.json` os `scripts`:
  ```
  ...
  "scripts": {
    ...
    "dev": "nodemon",
    "build": "tsc",
    "start": "node dist/app.js"
    ...
  }
  ...
  ```
