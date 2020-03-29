import React, {Component} from "react";

class App extends Component{
    render(){
        return (
            <div style={{width:100, height:50, background:"blue"}}>
              <p>Name: {this.props.name}</p>
              <p>Details: {this.props.details.address}, block: {this.props.details.block} </p>
            </div>
        );
    }
}
export default App;
