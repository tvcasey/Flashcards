
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
        //    let wordsmith = this.state.cards[this.state.currentCollection+1];
        //    let dynamite = this.state.cards[this.state.currentCollection+2];
            let vocabulary = [];
            for(let i = 0;i < 1; i++){
        //    for(let i = 1;i < wordsmith.cards.length; i++) {
        //    for(let i = 0;i <= dynamite.cards.length; i++) {

            
            
                vocabulary.push(
                    <div>
                        {/*<p>
                            {collection.cards[0].word}
                        </p>
                        <p>
                            {collection.cards[0].definition}
                        </p>*/}
                        {/*<p>
                            {wordsmith.cards[i].word}
                            {wordsmith.cards[i].definition}
                        </p>*/}    
                            {/*{collection.cards[i].word}
                            {collection.cards[i].definition}
                            {collection.cards[i].word}
                            {collection.cards[i].definition}
                            </p>*/}
                        {/* <p>
                            {wordsmith.cards[i].word}
                            {wordsmith.cards[i].definition}
                            {wordsmith.cards[i+1].word}
                            {wordsmith.cards[i+1].definition}
                            {wordsmith.cards[i+2].word}
                            {wordsmith.cards[i+2].definition}
                        </p>
                        <p>
                            {dynamite.cards[i].word}
                            {dynamite.cards[i].definition}

                        </p> */}


                    </div>
                );

                }    
            
            return (

                <div className="Flash">
                    <div className="Flip">
                        <div className="Flop">
                            <figure className="Front">
                                {collection.cards[0].word}
                            
                                {/*{this.state.vocabulary.cards[0].word}*/}
                            </figure>
                            <figure className="Back">
                                {collection.cards[0].definition}
                                {/*{this.state.currentCard.collection.cards[0].definition}*/}  
                                {vocabulary}
                            </figure>
                        </div>
                    </div>
                </div>);
    }
}
export default App;