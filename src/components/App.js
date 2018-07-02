import React, { Component } from "react";
import "../App.css";
// import axios from "axios";
import Card from "./Card";
import DeckName from "./DeckName";
import NavBar from "./NavBar";
import Details from "./Details";



class App extends Component {
  constructor() {
    super();

    this.state = {
      page: 'home',
      selectedCard: -1
    };
    this.handlePage = this.handlePage.bind(this);
    this.renderPage = this.renderPage.bind(this);
    this.selectCard = this.selectCard.bind(this);
  }
  handlePage(page) {
    this.setState({ page: page });

  }

  renderPage() {
    switch (this.state.page) {
      case ('home'):
        return <Card handlePage={this.handlePage} selectCard={this.selectCard} />
      case ('deck'):
        return <DeckName />
      case ('details'):
        return <Details card={this.state.selectedCard} />
      default:
        return
    }
  }
  selectCard(id) {
    this.setState({
      selectedCard: id
    }); console.log(this.state.selectedCard);
  }
  render() {
    return (
      <div>
        <NavBar
          favorites={this.handlePage}
          home={this.handlePage}
        />

        {this.renderPage()}


      </div>
    );
  }
}

export default App;