import express from "express";

const app = express();
const port = 3000;
const title = "Gunnneeeeeers";

app.get("/", (req, res) => {
    res.send("Hellooooooooooo")
});

app.listen(port, () => {
    console.log(`${title} listening on port ${port}`);
})