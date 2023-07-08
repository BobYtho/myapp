import logo from './logo.svg';
import './App.css';


import React from 'react';
class App extends React.Component {
constructor(props){
super(props);
this.state = {text: "Hola from state",
text2: "Hola usando Funcion State",
textinput: " "}
this.functionName = this.functionName.bind(this)
}

functionName(){
  this.setState({text: "Hello from functionName"})
}

arrowfunctionName = () =>{
  fetch("http://localhost:3001").then(response=>response.json()).then((data)=> { this.setState({text: data["text"],text2: data["text2"]})});
}

arrowFunctionExpress = () => {
  this.setState({text: "Hello from ArrowfunctionName"})
  }

arrowFunctionInput = (hola) => {
  console.log(hola.target.value)
  this.setState({textinput: hola.target.value})
}

render() {
return (
  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.state.text}
          <br />
          {this.state.text2}
          <br />
          {this.state.text+this.state.text2}
        </a>
        <button onClick={this.functionName}> function </button>
        <button onClick={this.arrowfunctionName}> arrowfunction </button>
        <button onClick={this.arrowFunctionExpress}>Function Express</button> 
        <br/>
        <div>
        {this.state.textinput}
        <br/>
        <input 
             value={this.state.textinput}
             onChange={(evento)=> {
              this.arrowFunctionInput(evento)
             }}
             >
            </input>
        </div>
      </header>
    </div>
);
}
}
export default App;