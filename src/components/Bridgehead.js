import React, { Component } from 'react';
import axios from 'axios';


class Bridgehead extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            word: '',
            definition: ''
        }
        console.log('This is from the constructor', this.state);
        }

        changeHandler = e => {
            console.log('This is the input name',[e.target.name]);
            console.log('This is the input value',e.target.value);
            this.setState({ [e.target.name]: e.target.value });
            console.log('This is from the changeHandler',this.state.word);
        }

        submitHandler = e => {
            e.preventDefault()
            console.log(this.state)
            axios.post('http://localhost:5000/api/collections/5f99e93d3ee3f54446ee3513/cards', this.state)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        }

    render() {
        const { word, definition } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                   
                    <div>
                        <input
                         type="text"
                         name="word"
                         value={word}
                         onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input
                         type="text"
                         name="definition"
                         value={definition}
                         onChange={this.changeHandler}/>
                    </div>
                    <button type="Submit">Create React Vocabulary</button>
                </form>
            </div>
        )
        
        }
}



export default Bridgehead;