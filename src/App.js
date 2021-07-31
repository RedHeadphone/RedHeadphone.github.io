import './App.css';
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startAnimationDone:false,
      totype:"Welcome to RedHeadphone's Site",
      text:"",
      cursor:'|'
    };
  }
  cursorfunc = ()=>{
    if(this.state.cursor==='|'){
      this.setState({cursor:" "})
    }
    else{
      this.setState({cursor:"|"})
    }
  }
  type = ()=>{
    this.setState({text:this.state.totype.slice(0,this.state.text.length+1)})
    if (this.state.text===this.state.totype) return
    setTimeout(this.type,Math.floor(Math.random()*500));
}
  onAnimationEnd = () => {
    this.setState({
      startAnimationDone:true
    });
    setInterval(this.cursorfunc,1000);
    setTimeout(this.type,2000);
  };
  render(){
    return (
      <div className="App">
        {!this.state.startAnimationDone && <div id="glitchEffect">
          <div className="glitchBar" id="g1"></div>
          <div className="glitchBar" id="g2"></div>
          <div className="glitchBar" id="g3"></div>
          <div className="glitchBar" id="g4"></div>
          <div className="glitchBar" id="g5" onAnimationEnd={this.onAnimationEnd}></div>
        </div>}
        {this.state.startAnimationDone && <div id="content">
          <div className="typing"><span id="text">{this.state.text}</span><span id="cursor">{this.state.cursor}</span></div>
        </div>}
      </div>
    );
  }
}

export default App;
