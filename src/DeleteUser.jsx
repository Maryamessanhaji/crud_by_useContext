import React from 'react'
import {  useParams,useNavigate } from "react-router-dom";
import { UsersContext } from "./App";
import { useContext } from "react";


export default function DeleteUser() {
    const context = useContext(UsersContext);
  const params = useParams();
  const navigate = useNavigate();

    const handleDelete = () => {
        context.actions.DeleteUser({
           payload: {
            id: params.id,
          },
        }); 
        
        navigate("/"); // Redirect to home or user list page
        
      };
  return (
    <div className="m-32 flex justify-center items-center">
    <form className="px-8 pt-6 pb-8 mb-4 bg-blue-100  rounded-lg max-w-md">
      <h1 className="text-xl font-bold  mb-4 text-center">
        Are you sure you want to delete this user?
      </h1>
      <div className="flex justify-center gap-4">
        <button
          type="button"
          onClick={handleDelete}
          className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-400 focus:outline-none "
        >
          Delete
        </button>
        <button
          type="button"
          onClick={() => navigate(-1)} // Navigate back to the previous page
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-400 focus:outline-none focus:ring-2"
        >
          Cancel
        </button>
      </div>
    </form>

</div>


  )
}
