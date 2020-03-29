import React, {Component} from "react";

class App extends Component{
    render(){
        return (
            <div style={{width:100, height:50, background:"red"}}>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default App;