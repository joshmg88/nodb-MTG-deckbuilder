const axios = require("axios");

let cards = [];
let title = '';
let fav = []

module.exports = {
  getCards: (req, res) => {
    axios
      .get("https://api.magicthegathering.io/v1/cards/?page=249")
      .then(magicCards => {
        cards = magicCards.data.cards;

        res.status(200).send(cards);
      })
      .catch(err => res.status(500).send(err));
  },
  updateTitle: (req, res) => {
    // console.log(req.body)
    title = req.body.newInput
    res.status(200).send(title)
  },
  deleteCard: (req, res) => {
    const deleteID = req.params.id;
    cardIndex = fav.findIndex(card => card.id == deleteID);
    fav.splice(cardIndex, 1);
    res.status(200).send(fav);
  },
  details: (req, res) => {
    axios.get(`https://api.magicthegathering.io/v1/cards/${req.params.id}`)
      .then(cardDetails => {
        // console.log(cardDetails);
        res.status(200).send(cardDetails.data)
      })
  },
  addFavs: (req, res) => {
    // console.log(req.body);
    fav.push(req.body)
    res.status(200).send(fav)
  },
  getFavs: (req, res) => {
    res.status(200).send(fav)
  }

};
