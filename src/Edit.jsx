import React, { useContext, useEffect, useRef, useState } from "react";
import { UsersContext } from "./App";
import {  useParams } from "react-router-dom";

export default function Edit() {
  const context = useContext(UsersContext);
  const InputFullNameRef = useRef();
  const InputCountryRef = useRef();
  const [currentUser, setCurrentUser] = useState({});
  const params = useParams();

    const handlSubmit = (e) => {
      e.preventDefault();

      context.actions.update({
        payload: {
          id: currentUser.id,
        fullName: InputFullNameRef.current.value,
        Country: InputCountryRef.current.value,
        },
      });
      
    };

  useEffect(
    () => {
      const { id } = params;
      const user = context.users.filter(user => user.id === parseInt(id));
       console.log(user.id)

      if (user.length > 0) {
        setCurrentUser(...user);
      } else {
        console.error("user not fond");
      }
    },

    []
    
  );


  return (
    <div className="container mx-auto p-6 max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center">User Edit</h1>

      <form className="px-8 pt-6 pb-8 mb-4 bg-blue-100" onSubmit={handlSubmit}>
        {/* ID Field */}
        <div className="mb-4">
          <label htmlFor="id" className="block  text-sm font-bold mb-2">
            ID
          </label>
          <input
            type="text"
            id="id"
            readOnly
            defaultValue={currentUser?.id}
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
            defaultValue={currentUser?.fullName}
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
            defaultValue={currentUser?.Country}
            key={currentUser?.Country}
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
            className=" bg-blue-500  hover:bg-blue-400 font-bold py-2 px-4 rounded  focus:shadow-outline"
          >
            update
          </button>
        </div>
      </form>
    </div>
  );
}
