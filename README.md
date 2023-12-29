Passo a passo para iniciar essa aplicação usando node, express e typescrypt

- Iniciar uma aplicação node com `npm init -y`

- Instalar as dependências básica para construir a aplicação com `npm install express cors dotenv`

- Instalar as depedências de desenvolvimento para auxiliar na construção da aplicação `npm install -D typescript nodemon ts-node @types/node @types/express @types/cors`

- Executar o comando `npx tsc --init` para criar o arquivo `tsconfig.json`

- No arquivo `tsconfig.json` adicionar a propriedade `"outDir": "./dist"` dentro de `"compilerOptions"`

- Criar 0 arquivo `.env ` com o conteúdo `PORT=3000`

- Criar os arquivos `src/index.ts` e `src/app.ts`

  - Adicionar ao `src/app.ts` o seguinte código:

    ```
    import express from "express";
    import cors from "cors";

    export class App {
        static bootstrap() {
            const app = express();

            app.use(cors());
            app.use(express.json());
            app.use(express.urlencoded({ extended: true }));

            return app;
        }
    }
    ```

  - E ao `src/index.ts` adicionar o seguinte código:

    ```
    import { App } from "./app";
    import dotenv from "dotenv";

    dotenv.config();

    const port = process.env.PORT || 9000;

    const app = App.bootstrap();

    app.get("/", (req, res) => {
        res.send("Hello World!");
    });

    app.listen(port, () => {
        console.log(`Application listening on port ${port}`);
    });
    ```

- Criar um arquivo `nodemon.json` na raíz do projeto com o seguinte conteúdo:

  ```
  {
      "watch": ["src"],
      "ext": "ts",
      "exec": "ts-node ./src/index.ts"
  }
  ```

- Adicionar ao arquivo `package.json` os `scripts`:
  ```
  ...
  "scripts": {
    ...
    "dev": "nodemon",
    "build": "tsc",
    "start": "node dist/index.js"
    ...
  }
  ...
  ```
