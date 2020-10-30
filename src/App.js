
import './App.css';
import React from 'react';
import axios from 'axios';




//Goals:
//Use componentDidMount to make axios call to API (localhost:5000)
//Save response from API as state variable data
//Try to display the 'word' from the first card in the first collection

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data: [],
      currentCollection: 0,
      currentCard: 0,




      componentDidMount() {
        axios.get('http://localhost:5000/api/collections')
          .then(res => {
            const cards = res.data;
            this.setState({ cards });
          })
      }

      //data: comes from the axios call
      //Other state variables you may want: currentCollection(int), currentCard(int), frontOfCard(bool)
    }
  }
  
  
  render(){
    return (
      <div>
        <ul>
        { this.state.cards(cards => <li>{cards}</li>)}
      </ul> 
      </div>
    );
    }
}

export default App;
