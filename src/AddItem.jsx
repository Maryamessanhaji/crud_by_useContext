import React, { useContext, useRef } from "react";
import {  UsersContext } from "./App";

export default function AddItem() {
  const context = useContext(UsersContext)
  const InputFullNameRef = useRef();
  const InputCountryRef = useRef();
 
  const handlSubmit = (e) => {
    e.preventDefault();
   
    context.actions.addUser({
      payload: {
        id: context.lastId + 1,
      fullName: InputFullNameRef.current.value,
      Country: InputCountryRef.current.value,
      },
    });
    InputFullNameRef.current.value = ""
     InputCountryRef.current.value = ""
  };

  
  
  return (
    <div className="container mx-auto p-6 max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center">User Form</h1>
     

      <form className="px-8 pt-6 pb-8 mb-4 bg-blue-100 " onSubmit={handlSubmit}>
        {/* ID Field */}
        <div className="mb-4">
          <label htmlFor="id" className="block  text-sm font-bold mb-2">
            ID
          </label>
          <input
            // ref={InputIdRef}
            type="text"
            id="id"
            readOnly
            value={context.lastId + 1}
            placeholder="Enter your ID"
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Full Name Field */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block  text-sm font-bold mb-2">
            Full Name
          </label>
          <input
            ref={InputFullNameRef}
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Country Field */}
        <div className="mb-4">
          <label htmlFor="country" className="block  text-sm font-bold mb-2">
            Country
          </label>
          <select
            ref={InputCountryRef}
            id="country"
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select your country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="GB">United Kingdom</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className=" bg-blue-400   hover:bg-blue-400 font-bold py-2 px-4 rounded  focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
