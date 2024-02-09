import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const handleUserAdded = (user) => {
    setUsers([user, ...users]);
  };
  return (
    <>
      <UserForm onUserAdded={handleUserAdded} />
      <UserList users={users} />
    </>
  );
}

export default App;
