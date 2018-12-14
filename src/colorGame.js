import React from 'react';
import './MemoStyle.css';
import Square from "./Square.js"

export default class ColorGame extends React.Component{
    constructor(props) {
        super(props);
        this._colors = ["#1e88e5", "#00796b", "#DDA0DD", "#e65100", 
        "#e53935", "#A52A2A", "#7FFF00", "#4B0082"];
        this.idarr=[]
        this.cards={}
        for(let i=0; i<this._colors.length; i++){
          this.idarr[this.getRendomIndex()]=this._colors[i]
          this.idarr[this.getRendomIndex()]=this._colors[i]
        }

        this.state=(
          {
              cards:this.idarr.map(color=>({
              color:'grey',
              flipped:false,
              guessed:false,
            })),
            color:"grey"
          }
        );
        this.hendleClick = this.hendleClick.bind(this)
    }
  
  getRendomIndex=()=>{
    let index=Math.floor(Math.random() * 16)
    while (this.idarr[index] !== undefined) {
      index = Math.floor(Math.random() * 16);
    }
    return index;//It takes index for random color
  }



  hendleClick(id){
    let elem=id
    let count=0
    let temp=0
    let arr=[]
      if(arr.length<2){
      for(let i=0; i<this.state.cards.length; i++){
        if(this.state.cards[i].flipped==true && this.state.cards[i].guessed==false){
          count++
          arr.push(i)
        }
      }
    }
    
    if(count==2){
      if(this.state.cards[arr[0]].color!==this.state.cards[arr[1]].color){
        this.state.cards[arr[0]].flipped=false
        this.state.cards[arr[1]].flipped=false
        temp++
        this.state.cards[arr[0]].color="grey"
        this.state.cards[arr[1]].color="grey"
        this.setState({
          cards: [...this.state.cards]
        });
      }
      console.log(this.state.cards)
      if(this.state.cards[arr[0]].color===this.state.cards[arr[1]].color && temp===0){
        this.state.cards[arr[0]].guessed=true
        this.state.cards[arr[1]].guessed=true 
      }
      count=0
      arr.splice(0,2)
      temp=0
    } 

    this.state.cards[elem].flipped=true
    this.setState({
      cards: [...this.state.cards]
    });
    if(this.state.cards[id].color === this.idarr[id]){
      return null
    } else {
      this.state.cards[id].color=this.idarr[id]
    }

    this.setState({
      cards: [...this.state.cards]
    });
  }

  
render() {
  console.log(this.state.color)
    return (
    
      <div>
        {
          Object.keys(this.state.cards).map((color, i) => (
                <Square 
                key={i} 
                count={color}
                cards={this.state.cards}
                color={this.state.cards[i].color} 
                flipped={this.state.cards[i].flipped} 
                guessed={this.state.cards[i].guessed}  
                onClick={(e) => this.handleClick(e)}
                parentMethod={this.hendleClick.bind(this)}
                />
              ))
        }             
      </div>
    );
  }
  }

