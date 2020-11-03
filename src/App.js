
import './App.css';
import React from 'react';
import axios from 'axios';


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

                <div className="Flash">
                    <div className="Flip">
                        <div className="Flop">
                            <card className="Front">
                                {collection.cards[card].word}
                            </card>
                            <card className="Back">
                                {collection.cards[card].definition}
                            </card>       
                        </div>
                    <div className="ChangeCollections">
                    <button onClick={() => this.forward()}>Advance A Card</button>
                    <button onClick={() => this.backward()}>Go Back A Card</button>
                    <button onClick={() => this.collectionForward()}>Collection Forward</button>
                    <button onClick={() => this.collectionBackward()}>Collection Backward</button>
                    </div>
                    </div>
                </div>);
                
            }    
            }
}}
export default App;