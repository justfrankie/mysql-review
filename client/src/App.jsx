import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="mainContainer">
            <img id="mainImage" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"></img>
            <input id="mainInput" type='text' placeholder="Type to search Restaurants, Services, Bars..."></input>
            <button id="mainButton" onClick={()=>{console.log("Component under Construction!")}}>Search</button>
            </div>
        )
    }
}

export default App;