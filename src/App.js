
import './App.css';
import React from 'react';
import axios from 'axios';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: [],
            currentCollection: 0,
            currentCard: 0,
            loading: true
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/collections')
            .then(res => {
                var cards = res.data;
                this.setState({
                 cards: cards,
                 loading: false});
            })
    }
    render() {
        if (this.state.loading === true) {
            return (<div>loading...</div>);
        }
            let collection = this.state.cards[this.state.currentCollection];
            let wordsmith = this.state.cards[this.state.currentCollection+1];
            let dynamite = this.state.cards[this.state.currentCollection+2];
            let vocabulary = [];
            for(let i = 0;i < collection.cards.length; i++){
            for(let i = 0;i < wordsmith.cards.length; i++) {
            for(let i = 0;i < dynamite.cards.length; i++) {

            
            
                vocabulary.push(
                    <div>
                        <p>
                            {collection.cards[i].word}
                            {collection.cards[i].definition}
                            
                        </p>
                        <p>
                            {wordsmith.cards[i].word}
                            {wordsmith.cards[i].definition}
                        </p>
                        <p>
                            {dynamite.cards[i].word}
                            {dynamite.cards[i].definition}

                        </p>


                    </div>
                );

                }}}    
            
            return (

            <div className="trialRun">
                  {vocabulary}  
                    



            </div>);
    }
}
export default App;