import express, { Express, Router } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PublicRoutes } from "./routes/public.routes";

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

    new PublicRoutes(routes);

    this.express.use(routes);
  }
}

new App();
