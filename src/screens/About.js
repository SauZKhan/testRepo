import React, {Component} from "react";
import {Link} from "react-router-dom";


class App extends Component{
    // lifecycle methods

    state={
        name: "sauz"
    };

    componentDidMount(){
        console.log("Component did mount");
    }

    componentWillUnmount(){
        console.log("Component ll unmount");
    } 

    componentDidUpdate(){
        console.log("Updating Component");
    }

    constructor(){
        super();
        console.log("Constructor activated");
    }

    render(){
        return (
            <div>
              <h1>About</h1>
                <Link to="/">go to Home page</Link>
                <button
                onClick={()=>{
                    this.setState({
                        name:"khan"
                    });
                }}>
                Change
                </button>
            </div>
        );
    }
}
export default App;
