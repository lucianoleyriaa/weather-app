import React from "react";

const Card = ({ weatherInfo }) => {
   console.log(weatherInfo);

   return (
      <div className="card m-3">
         <div className="card-body">
            <p className="card-text text-center">
               <p className="text-description">
                  La temperatura actual en {weatherInfo.name} es de:
               </p>
               <div className="mt-2 p-5">
                  <h1 className="temperature">{weatherInfo.main.temp} C°</h1>
               </div>
            </p>

            <div className="d-flex justify-content-around">
               <h3 className="text-primary">
                  Minima: {weatherInfo.main.temp_min} C°
               </h3>
               <h3 className="text-danger">
                  Maxima: {weatherInfo.main.temp_max} C°
               </h3>
            </div>
         </div>
      </div>
   );
};

export default Card;
