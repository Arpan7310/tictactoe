import React from 'react'
import Board from './Board'

export default  function Game () {
  
      return (
        <div style={{display:"flex",flexDirection:"row"}}>
          <div style={{margin:"25%"}}>
            <Board />
          </div>
          <div style={{marginLeft:"20px"}}>
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
          
        </div>
      );
    
  }
 