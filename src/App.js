
import './App.css';
import React from 'react';
import axios from 'axios';
import Bridgehead from './components/Bridgehead';
import Flank from './components/Flank';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            currentCollection: 0,
            currentCard: 0,
            loading: true
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/collections')
            .then(res => {
                var data = res.data;
                this.setState({
                 data: data,
                 loading: false});
            })
    }

    collectionForward(){
        this.setState({
            currentCollection: this.state.currentCollection+1

        });
    }
    collectionBackward(){
        this.setState({
            currentCollection: this.state.currentCollection-1
        });
    }

    forward(){
        this.setState({
            currentCard: this.state.currentCard+1
        });
    }
    backward() {
        this.setState({
            currentCard: this.state.currentCard-1
        });

    }

    render() {
        if (this.state.loading === true) {
            return (<div>loading...</div>);
        }
        else{
            let collection = this.state.data[this.state.currentCollection];
            let card = this.state.currentCard;
        //    let wordsmith = this.state.cards[this.state.currentCollection+1];
        //    let dynamite = this.state.cards[this.state.currentCollection+2];
            let vocabulary = [];
            for(let i = 0;i < collection.cards.length; i++){
        //    for(let i = 1;i < wordsmith.cards.length; i++) {
        //    for(let i = 0;i <= dynamite.cards.length; i++) {        
                vocabulary.push(
                    <div>
                        
                    </div>
                );
            return (
            <div className="More">
                <Bridgehead/>
            <div className="Blitz">
                <Flank/>
                
                <div className="Flash">
                    <div className="Flip">
                        <div className="Flop">
                            <figure className="Front">
                                {collection.cards[card].word}
                            </figure>
                            <figure className="Back">
                                {collection.cards[card].definition}
                            </figure>       
                        </div>
                    <div className="ChangeCollections">
                    <button onClick={() => this.forward()}><h3>Card: {collection.cards[card].word} {this.state.currentCard+1} </h3></button>
                    <button onClick={() => this.backward()}><h3>Card Go Back:</h3></button>
                    <button onClick={() => this.collectionForward()}><h3>Collection: {collection.title} {this.state.currentCollection+1}</h3></button>
                    <button onClick={() => this.collectionBackward()}><h3>Collection Go Back: </h3></button>
                    </div>
                    </div>
                </div>
                </div>
            </div>);
                
            }    
            }
}}
export default App;