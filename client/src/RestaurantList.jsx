import React from 'react';

let RestaurantList = (props) => {
    console.log(props)
 return (
     <div className="listingContainer">
     {props.list.map((data, key) => (
         <div key={key} className="restaurantListing">
         <li>{`${data.name}`}</li>
         <li>{`${data.rating}/5`}</li>
         <li>{`${data.location}`}</li>
         <li>{`${data.type}`}</li>
         </div>
     ))}
     </div>
 )
}


export default RestaurantList;
