import React from "react";
import { Fragment } from "react";

const Form = () => {
   return (
      <Fragment>
         <form>
            <div className="form-group">
               <label className="text-white mb-2">City</label>
               <input type="text" className="form-control" />
            </div>
            <div className="form-group mt-3">
               <label className="text-white mb-2">Country</label>
               <select className="form-select">
                  <option value="argentina">Argentina</option>
                  <option value="chile">Chile</option>
                  <option value="brasil">Brasil</option>
                  <option value="uruguay">Uruguay</option>
                  <option value="paraguay">Paraguay</option>
               </select>
            </div>
            <button className="btn btn-success mt-3 mb-3">Buscar</button>
         </form>
      </Fragment>
   );
};

export default Form;
