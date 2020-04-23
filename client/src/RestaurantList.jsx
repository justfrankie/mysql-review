import React from 'react';

let RestaurantList = (props) => {
    console.log(props)
 return (
     <div className="listingContainer">
     {props.list.map((data, key) => (
         <div key={key} className="restaurantListing">

            <div className="listingImageContainer">
                <img src={`${data.img}`} className="restaurantImage"></img>
            </div>

            <div className="listingTextContainer">
                <li id="listingTitle">{`${data.name}`}</li>
                <li>{`Rating: ${data.rating}/5`}</li>
                <li>{`City: ${data.location}`}</li>
                <li>{`Business Type: ${data.type}`}</li>
            </div>

         </div>
     ))}
     </div>
 )
}


export default RestaurantList;
