import React, {Component} from 'react';

class RandomNum extends Component{
   constructor(props)  {
       super(props);
       this.state=
       {
           number:0
        };

        this.handleClick=this.handleClick.bind(this);
   }

handleClick() {

let Rand=Math.floor(Math.random()*10);
this.setState({number:Rand});

}

render(){
   
    return(
        <div>

        <h1>Number is:{this.state.number}</h1>

        <h2>{this.state.number==5? "win":null}</h2>

        

        <button  onClick={ this.handleClick}>
           Random Number
          </button>

        </div>
    )
}
}

export default RandomNum;