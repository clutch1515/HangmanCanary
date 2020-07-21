import React, { Component } from 'react';


class GuessWord extends Component {
  render() {
    const wordLetters = this.props.word.split('')
    const wordBoard = wordLetters.map(letter => {
        let letterState = '_ '
        if(this.props.lettersGuessed.includes(letter)){
            letterState = letter
        }
        return letterState
    })
    return(
    <div className="GuessWord">
        <h3>{wordBoard}</h3>
    </div>
    );
  } 
}


export default GuessWord;