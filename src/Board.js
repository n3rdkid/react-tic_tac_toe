import React from 'react';
import Square from './Square';
import classes from './Board.module.css';
class Board extends React.Component{
        state={
            squares:Array(9).fill(null)
        }
        clickHandler=(i)=> {
            console.log("rending")
            const squares=[...this.state.squares];
            squares[i]="X";
            this.setState({squares:squares});
        }
        renderSquare(i)
        {
   
           return <Square clicked={()=>this.clickHandler(i)} value={this.state.squares[i]}/>
        }

        render()
        {
            return (
             <div className="board">
                <div className={classes.row}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                       
                </div>
                <div className={classes.row}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className={classes.row}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
            )
        }
}
export default Board;