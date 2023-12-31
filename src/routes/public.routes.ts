import { Express, Router } from "express";

export class PublicRoutes {
  constructor(routes: Router) {
    routes.get("/", (req, res) => {
      res.send("Hello World!");
    });

    routes.get("/ping", (req, res) => {
      res.json({ pong: true });
    });
  }
}
