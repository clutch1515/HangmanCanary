import React, { Component } from 'react';


class WrongGuess extends Component {
    getWrongGuess(){
        const wrong = this.props.lettersGuessed.filter(letter => {
            return !this.props.word.split('').includes(letter)
        })
        return wrong
    }

  render() {
    
    return(
    <div className="WrongGuess">
        {this.getWrongGuess()}
    </div>
    );
  } 
}


export default WrongGuess;