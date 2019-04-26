import React from 'react';
import Board from './Board';
import './Game.css';
class Game extends React.Component {
      state = {
        history: [{
          squares: Array(9).fill(null),
        }],
        xTurn: true,
        stepNumber:0
      };
      checkWinner(squares) {
        const winConditions = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ]
        for (let condition of winConditions) {
          let [a, b, c] = condition;
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }

        }
        return null;
      }
      handleClick(i)
      {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = [...current.squares];
        if (this.checkWinner(squares) || squares[i]) {
          return;
        }
        squares[i]=this.state.xTurn ? 'X' : 'O';
        this.setState({history:history.concat([{squares:squares}]),xTurn: !this.state.xTurn,stepNumber:history.length})
      
      }
      jumpTo(step) {
        this.setState({
          stepNumber: step,
          xTurn: (step % 2) === 0,
        });
      }
    render() {
      const history=this.state.history;
      const current=history[this.state.stepNumber];
      const winner = this.checkWinner(current.squares);
      const moves=history.map(
        (step,move)=>{
          const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });
      

      let status;
      if(winner)
          status=<h1>{winner} won the game!!!HURRAY</h1>
      else
      status= <h1>Next Turn =>  {this.state.xTurn?"X":"O"}</h1>





        return (
          
            <div className="game">
              <div className="game-board">
                    <Board squares={current.squares}
                    onClick={(i) => this.handleClick(i)}/>
              </div>
              <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
              </div>
            </div>
        )
    }
}
export default Game;