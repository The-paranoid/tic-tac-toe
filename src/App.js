import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state ={
    board : Array(9).fill(null),
    player:'X',
    winner:null,
    class:"square"


  }

Getstatus(){
  if(this.state.winner===null)
  {
    return(<div> Current Player is {this.state.player} </div>)
  }
  else{
    return(<div> Winner is {this.state.winner}</div> )
  }
}
reset()
{
  this.setState({
    board : Array(9).fill(null),
    player:'X',
    winner:null,
    class:"square"
  });
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
    if(this.state.player=='X')
    {
        this.state.class="square x";
    }
    else
    {
        this.state.class="square o";
    }

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
    const Box=this.state.board.map((box,index)=><div className={this.state.class} key={index} onClick = {()=>this.clicked(index)}>
    {box}</div>);
   

    return (
    <div id="game">
    <div id="head">
     <h1> Tic-Tac-Toe </h1>
     <h3>{this.Getstatus()} </h3>
    <br/>
      </div>
      <div id="board">
        {Box}
      </div>
      <button id="reset" onClick={()=>this.reset()}> Reset </button>
      </div>
    );
  }
}

export default App;
