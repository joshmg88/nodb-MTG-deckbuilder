const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const cardCtrl = require("./controllers/cardCtrl");
const port = 3001;

app.use(bodyParser.json());

app.use(cors());

app.get("/api/cards", cardCtrl.getCards);
console.log(cardCtrl.getCards);

app.put("/api/cards/title", cardCtrl.updateTitle)

app.delete("/api/cards/:id", cardCtrl.deleteCard)

app.get("/api/cards/:id", cardCtrl.details)

// app.post("/api/cards", cardCtrl.createCard)

app.post("/api/addFavs", cardCtrl.addFavs)

app.get("/api/getFavs", cardCtrl.getFavs)

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});


