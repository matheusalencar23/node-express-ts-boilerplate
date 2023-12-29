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
