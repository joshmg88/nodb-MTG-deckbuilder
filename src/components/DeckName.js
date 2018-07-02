import React, { Component } from "react";
import axios from 'axios'

import "./DeckName.css"

class DeckName extends Component {

  constructor() {
    super();

    this.state = {
      title: "Deck Name",
      newTitle: "",
      newInput: "",
      editTitle: false,
      favs: []

    }
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }

  componentDidMount() {
    axios.get('/api/getFavs').then(response => {
      // console.log(response);
      this.setState({ favs: response.data });
    })
  }

  handleTitle() {
    this.setState({
      editTitle: !this.state.editTitle
    })
  }

  handleInput(val) {
    this.setState({
      newInput: val
    })
  }

  handleClick() {
    let { newInput } = this.state;
    axios.put("/api/cards/title", { newInput }).then(res => {
      this.setState({
        newTitle: res.data,
        editTitle: !this.state.editTitle,
        newInput: ""
      })
    })
  }

  handleDelete(id) {
    axios.delete(`api/cards/${id}`).then(res => {
      this.setState({
        favs: res.data
      });
    })
  }

  render() {
    // console.log(this.state.favs);
    let favCreature = this.state.favs.map((e, i) => {
      return (
        <div key={i}>
          <img src={e.imageUrl} alt={e.name} />
          <button onClick={() => this.handleDelete(e.id)} >delete</button>
        </div>
      )
    })
    return (
      <div>
        {!this.state.editTitle ?
          <h1 onClick={this.handleTitle}>{this.state.newTitle ? this.state.newTitle : this.state.title}</h1> :
          <div>
            <input placeholder="Insert New Deck Name" onChange={e => this.handleInput(e.target.value)} />
            <button onClick={this.handleClick}>Submit</button>
          </div>
        }
        <div className='deck'>{favCreature}</div>

      </div>
    )
  }

}

export default DeckName;
