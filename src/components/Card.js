import React, { Component } from "react";
import axios from 'axios'

import './Card.css';


class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      userInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/cards")
      .then(res => {
        this.setState({ cards: res.data });

        // console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  handleChange(value) {
    this.setState({ userInput: value });
  }

  handleClick(e) {
    // console.log(e);
    axios.post("/api/addFavs", e)
  }

  handleDetails(id) {
    // console.log(id);
    this.props.selectCard(id)
    this.props.handlePage('details')
  }

  render(props) {
    // console.log(props.obj);

    let creatureName = this.state.cards
      .filter(e => e.name.includes(this.state.userInput))
      // .map((e, i) => <Card key={i} obj={e} />);
      .map((e, i) => {
        return (
          <div key={i}>
            <img src={e.imageUrl} alt={e.name} />
            <button className="deck" onClick={() => {
              this.handleClick(e)
            }}>Deck</button>
            <button className='details' onClick={() => { this.handleDetails(e.id) }}>Details</button>
          </div>

        )
      })

    return (
      <div>
        <div className="search">
          <input onChange={e => this.handleChange(e.target.value)} />
        </div>
        <div className='cards'>
          {creatureName}
        </div>
      </div>
    );
  }
}
export default Card;

