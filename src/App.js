import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useState } from "react";
import "./App.css";
import Layout from "./Layout";

export const UsersContext = createContext({
  users: [],
  lastId: 0,
  addUser: () => null,
  update: () => null,
  DeleteUser: () => null,
});

function App() {
  const [users, setUser] = useState([]);
  const [lastId, setLastId] = useState(0);
  const addUser = (data) => {
    setUser((prevState) => [...prevState, data.payload]);
    setLastId((prevState) => prevState + 1);
    window.history.back();
  };
  const DeleteUser = (data) => {
    setUser((prevState) =>
      prevState.filter((user) => user.id !== parseInt(data.payload.id))
    );
    window.history.back();
  };

  const update = (data) => {
    const { id, ...rest } = data.payload;
    setUser((prevState) =>
      prevState.map((user) => {
        if (user.id === id) {
          return { id: user.id, ...rest };
        }
        return user;
      })
    );
    window.history.back();
  };
  return (
    <>
      <UsersContext.Provider
        value={{
          users: users,
          lastId: lastId,
          actions: {
            addUser,
            update,
            DeleteUser,
          },
        }}
      >
        <Layout />
      </UsersContext.Provider>
    </>
  );
}

export default App;
