import express, { Request, Response } from "express";
import { Player } from "./entities/player";
import db from "./config/db";
// import cors from 'cors';

const app = express();
const port = 4000;
const title = "Gunnneeeeeers";

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hellooooooooooo")
});

// players
app.get("/players", async (req: Request, res: Response) => {
  try {
    const players = await Player.find();
    res.send(players);
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.listen(port, async () => {
  await db.initialize();
    console.log(`${title} listening on port ${port}`);
})