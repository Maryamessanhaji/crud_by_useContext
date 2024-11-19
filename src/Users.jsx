import { Link } from "react-router-dom";
import { UsersContext } from "./App";
import { useContext } from "react";

export default function Users() {
  const context = useContext(UsersContext);

  return (
    <div className="container mx-auto p-4 ">
      <button
        type="submit"
        className=" bg-blue-500  hover:bg-blue-400 font-bold py-2 px-4 rounded m-6 "
      >
        <Link to="/adduser">Add user</Link>
      </button>

      <h1 className="text-2xl font-bold mb-4">User Table</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full ">
          <thead>
            <tr className="bg-blue-200">
              <th className="border px-4 py-2 text-center">ID</th>
              <th className="border px-4 py-2 text-center">
                Full Name
              </th>
              <th className="border px-4 py-2 text-center">
                Country
              </th>
              <th className="border px-4 py-2 text-center">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {context.users?.length > 0 ? (
              context.users.map((user, index) => (
                <tr key={index} className="hover:bg-blue-100">
                  <td className=" border px-4 py-2">
                    {user.id}
                  </td>
                  <td className=" border px-4 py-2">
                    {user.fullName}
                  </td>
                  <td className="  border px-4 py-2">
                    {user.Country}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      type="submit"
                      className=" bg-blue-500 font-bold py-2 px-4 rounded  focus:shadow-outline  hover:bg-blue-400"
                    >
                      <Link to={`user/${user.id}/edit`}>edit</Link>
                    </button>
                    <button
                      type="submit"
                      className=" bg-red-600 font-bold py-2 px-4 rounded ml-6 focus:shadow-outline hover:bg-red-400"
                    >
                      <Link to={`user/${user.id}/delete`}>delete</Link>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  align="center"
                  className="border border-blue-300 px-4 py-2"
                >
                  {" "}
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
