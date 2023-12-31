import express, { Express, Router } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT ? parseInt(process.env.PORT) : 9000;

class App {
  express: Express;

  constructor() {
    this.express = express();

    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));

    this.configRoutes();

    this.express.listen(port, () => {
      console.log(`Application listening on port ${port}`);
    });
  }

  private configRoutes(): void {
    const routes = Router();

    routes.get("/", (req, res) => {
      res.send("Hello World!");
    });

    routes.get("/ping", (req, res) => {
      res.json({ pong: true });
    });

    this.express.use(routes);
  }
}

new App();
