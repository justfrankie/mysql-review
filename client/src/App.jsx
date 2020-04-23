import React from 'react';
import axios from 'axios';
import RestaurantList from './RestaurantList.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurantData: []
        }
        this.getData =  this.getData.bind(this);
    }

    componentDidMount(){
        this.getData();
        console.log("Component Mounted!")
    }

    getData(){
        axios.get('/restaurants')
        .then(result => this.setState({
            restaurantData: result.data
        }))
        .catch(err => console.error(err))
    }

    render() {
        return (
            <div>

            <div className="mainContainer">
            <img id="mainImage" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"></img>
            <input id="mainInput" type='text' placeholder="Type to search Restaurants, Services, Bars..."></input>
            <button id="mainButton" onClick={()=>{console.log("Component under Construction!")}}>Search</button>
            </div>

            <RestaurantList list={this.state.restaurantData}/>
            </div>
        )
    }
}

export default App;