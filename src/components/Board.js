

import React ,{useState, useEffect} from 'react'
import Square from './Square'
import Timer from './Timer'
import Timer2 from './Timer2'
export default  function Board () {
  

    const [squares,setSquares]=useState(Array(9).fill(null))
    const [xIsNext,setxIsNext]=useState(true)
    const [player1,setPlayer1]=useState('')
    const [player2,setPlayer2]=useState('')
    const [timeOut,setTimeout]=useState(false)
    const [initial,setInitial]=useState(false)
    const [start,setStart]=useState(false)
    let status="";
   const   calculateWinner =(squares) =>{
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            
            return squares[a];
          }
        }

    
        return null;
      }
  
   const  handleClick =(i)=> {
     
      if (calculateWinner(squares) || squares[i]   ) {
        return;
      }
   
     if(timeOut){
       return;
     }

     if(!start){
       return;
     }
    
      squares[i] = xIsNext ? 'X' : 'O';

      setSquares(squares);
      setxIsNext(!xIsNext);
     
    }

    const checkDraw =() =>{
     let i,x
      for(i=0;i<=8;i++){
      if(squares[i]==null){
      x=false
      break;
      }
      else{
      x=true
      
      }
    
    }
    return x
  }

 
   const  renderSquare=(i)=> {
      return (
        <Square
          value={squares[i]}
          onClick={() => handleClick(i)}
        />
      );
    }
  
 const timeOutf =(timeout) =>{


  if(timeout)
  setTimeout(true)
  else 
  setTimeout(false)
 }

const  checkinitial = () =>{
   if(player1.trim() !=='' && player2.trim() !=='')
   setInitial(true);
   else
   setInitial(false);
  
 }



      const winner = calculateWinner(squares);
     
      if (winner){   status ='Winner: ' + (xIsNext ? player2 : player1);
     
    
      }
      else if(start)  status = 'Current player: ' + (xIsNext ? player1 : player2);
      
      if (checkDraw()){
        status='draw'
       
      
      }
      
      if(timeOut)
      status="timeout" + (xIsNext?'Winner is '+player2:"Winner is "+player1)

      return (
        <div >
          <div style={{flexDirection:'row',display:'flex',justifyContent:'space-evenly',margin:"10%"}}>
           <div style={{marginBottom:"10px"}}>
             
             <input outline={initial} onChange={(e)=>setPlayer1(e.target.value)}></input>
             <button onClick={()=>checkinitial()}>Set Player 1 name</button>
             <h1 style={{backgroundColor:start?xIsNext?'green':'grey':'grey'}}>{player1}</h1>
             </div>
             <button style={{height:40,width:60,margin:10,marginLeft:-50}}disabled={!initial} onClick={()=>setStart(true)}>Start</button>
           <div style={{marginBottom:"10px"}}>
           <input outline={initial} onChange={(e)=>setPlayer2(e.target.value)}></input>
           <button onClick={()=>checkinitial()}>Set player 2 name</button>
           <h1 style={{backgroundColor:start?xIsNext?'grey':'green':'grey'}}>{player2}</h1>
           </div>
           </div>
          <div style={{flexDirection:"row",display:"flex"}}>
            <div>
         {status=='draw' || status[0]=='W'?<Timer2/>:start?timeOut?<Timer2/>:xIsNext?<Timer timeOutf={timeOutf} />:<Timer2 />:<Timer2/>}
         </div>
          <div style={{width:200,height:200}}>
          <div >
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            </div>
          <div >
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div >
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          </div>
         <div >
          {status=='draw'|| status[0]=='W'?<Timer2/>:start?timeOut?<Timer2/>:xIsNext?<Timer2 />:<Timer timeOutf={timeOutf} />:<Timer2/>}
          </div>
           </div>
          
           <p>{status}</p>
           {winner || status=='Draw' || status[0]=='t' ?<button className="reset"
           onClick={()=>window.location.reload(false)}>Reset Game</button>:<div></div>}
        </div>
      );
    
  }