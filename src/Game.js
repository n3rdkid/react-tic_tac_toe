import React from 'react';
import Board from './Board';
import './Game.css';
class Game extends React.Component {
    render() {
        return (
          
            <div className="game">
              <div className="game-board">
                    <Board/>
              </div>
              <div className="game-info">
                <h1>Status</h1>
              </div>
            </div>
        )
    }
}
export default Game;