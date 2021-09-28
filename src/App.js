import "./App.css";
import Form from "./components/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
   const [data, setData] = useState(null);
   const [weather, setWeather] = useState(null);
   const [loading, setLoading] = useState(false);
   const [apiError, setApiError] = useState(null);

   const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

   useEffect(() => {
      if (!data) return;
      fetchWeather("https://api.openweathermap.org/data/2.5/weather", data);
      setLoading(true);
      setWeather(null);
      setApiError(false);
   }, [data]);

   const fetchWeather = async (url, { city, country }) => {
      try {
         const params = {
            q: `${city}, ${country}`,
            appid: `${API_KEY}`,
            units: "metric",
         };

         const response = await axios(url, { params });

         setLoading(false);
         setWeather(response.data);
      } catch (e) {
         setApiError("No se encuentra la ubicacion ingresada");
         setLoading(false);
      }
   };

   return (
      <div className="bg-primary" style={{ minHeight: "25rem" }}>
         <div className="container pt-5 ">
            <div className="row">
               <div className="col-md-6">
                  <Form sendRequest={setData} />
               </div>
               <div className="col-md-6 text-center">
                  {loading && (
                     <div class="spinner-border text-warning" role="status">
                        <span class="visually-hidden">Loading...</span>
                     </div>
                  )}
                  {weather && <Card weatherInfo={weather} />}
                  {apiError && (
                     <div className="alert alert-danger">{apiError}</div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
