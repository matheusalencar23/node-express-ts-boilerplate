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
