import React, { Component } from 'react';


class EnterGuess extends Component {
    _handleSubmit = (e) => {
        e.preventDefault()
        const letter = this.refs.textInput.value
        this.props.updateGameState(letter)
        this.refs.textInput.value = ''
    }

  render() {
    
    return(
    <div className="EnterGuess">
        <form onSubmit={this._handleSubmit.bind(this) }>
            <input type="text" ref="textInput" maxLength="1" />
            <button>Send it</button>
        </form>
    </div>
    );
  } 
}


export default EnterGuess;