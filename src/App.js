import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state ={
    board : Array(9).fill(null),
    player:'X',
    winner:null

  }


  winnerCheck(){
    let winnerstats = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    
      ]; 
      for(let i=0;i<winnerstats.length ;i++)
      {
        const [a,b,c] =winnerstats[i];
        if(this.state.board[a]&&this.state.board[a]===this.state.board[b]&&this.state.board[b]===this.state.board[c])
        {
      this.setState({
        winner:this.state.player
      });
          console.log("Winner is " +this.state.player);
        }
      }
      
    }
  clicked(index)
  {
if(this.state.winner===null){
    let newBoard=this.state.board;
    if(this.state.board[index]===null)
    {newBoard[index]=this.state.player;

 let newplayer = this.state.player === 'X' ? 'O' : 'X';
    this.setState({
      board:newBoard,
    player:newplayer}
    )
    this.winnerCheck();
    
  }
}
else{
  console.log(" The Game has ended ");
}
  }
  
  
  

  render()
 
  {
    const Box=this.state.board.map((box,index)=><div className="square" key={index} onClick = {()=>this.clicked(index)}>
    {box}</div>);
   

    return (
    <div id="game">
    <div id="head">
      Tic-Tac-Toe<br/><br/>
     
     <br/><br/>
      </div>
      <div id="board">
        {Box}
      </div>
      </div>
    );
  }
}

export default App;
