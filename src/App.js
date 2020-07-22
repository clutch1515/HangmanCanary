import React, { Component } from 'react';
import './App.css';
import words from './words';
import GuessWord from './components/GuessWord';
import WrongGuess from './components/WrongGuess';
import EnterGuess from './components/EnterGuess';
import StickMan from './components/StickMan';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word: words[Math.floor(Math.random() * words.length)],
      lettersGuessed: [],
      remainingGuesses: 4,
    }
    console.log(this.state.word)
  }

  _updateLettersGuessed (letter) {
    if(this.state.lettersGuessed.includes(letter)){
      alert(`Already tried ${letter}`)
    }else {
      this.setState({
        lettersGuessed: [...this.state.lettersGuessed, letter]
      })
    }
  }

  updateRemainingGuesses(letter) {
    if (!this.state.lettersGuessed.includes(letter) && !this.state.word.split('').includes(letter)) {
      this.setState({remainingGuesses: this.state.remainingGuesses - 1 })
      
    }
  }

  gameOver() {
    if(this.state.remainingGuesses <= 0) {
      alert(`Too many guesses, the word was ${this.state.word}. Refresh page to try again!`)
    } else if (this.wordCorrect()) {
      alert(`Awesome Job! You guessed ${this.state.word}`)
    }
  }

  wordCorrect() {
    const guessState = this.state.word.split('').map(letter => {
      if(this.state.lettersGuessed.includes(letter)) {
        return letter
      }
    })
    return guessState.join('') === this.state.word
  }

  updateGameState(letter) {
    this._updateLettersGuessed(letter)
    this.updateRemainingGuesses(letter)
    this.gameOver()
  }

  render() {
    return(
      <div className="App">
      <h1>Hangman MVP for Canary</h1>
      <GuessWord word={this.state.word} lettersGuessed={this.state.lettersGuessed}/>
      <WrongGuess word={this.state.word} lettersGuessed={this.state.lettersGuessed} stickMan={this.state.stickMan}/>
      <EnterGuess updateGameState={ (letter) => this.updateGameState(letter) }/>
      <StickMan remainingGuesses={this.state.remainingGuesses} />
      <h4>Guesses Remaining: {this.state.remainingGuesses} </h4>
      <h6>I appreciate your time and consideration and I look forward to hearing back from you soon. I wanted to get the actual man to render and i'm still working through that, but here is the Minimum Viable Product that you have requested.</h6>
    </div>
    );
  } 
}


export default App;
