import React from "react";
import { Fragment, useState } from "react";

const Form = (props) => {
   const [data, setData] = useState({ city: "", country: "" });
   const [error, setError] = useState(false);

   const onChangeHandler = (e) => {
      setData((prevState) => {
         return { ...prevState, [e.target.name]: e.target.value };
      });
   };

   const { city, country } = data;

   const onSubmitHandler = (e) => {
      e.preventDefault();

      if (city === "" || country === "") return setError(true);

      setError(false);

      props.sendRequest(data);
   };

   return (
      <Fragment>
         <form onSubmit={onSubmitHandler}>
            {error && (
               <div className="alert alert-danger">
                  Todos los campos son obligatorios
               </div>
            )}
            <div className="form-group">
               <label className="text-white mb-2">City</label>
               <input
                  type="text"
                  name="city"
                  className="form-control"
                  onChange={onChangeHandler}
                  value={city}
                  placeholder="Enter a city"
               />
            </div>
            <div className="form-group mt-3">
               <label className="text-white mb-2">Country</label>
               <select
                  className="form-select"
                  name="country"
                  onChange={onChangeHandler}
                  value={country}
               >
                  <option value="">--Seleccionar--</option>
                  <option value="AR">Argentina</option>
                  <option value="CL">Chile</option>
                  <option value="BR">Brasil</option>
                  <option value="UY">Uruguay</option>
                  <option value="PY">Paraguay</option>
                  <option value="BO">Bolivia</option>
               </select>
            </div>
            <div className="d-grid mt-3">
               <button className="btn btn-warning mt-3 mb-3 ">Buscar</button>
            </div>
         </form>
      </Fragment>
   );
};

export default Form;
