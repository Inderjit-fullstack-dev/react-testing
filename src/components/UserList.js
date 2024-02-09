function UserList({ users }) {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          {" "}
          Name: {user.name} - Email: {user.email}{" "}
        </li>
      ))}
    </ul>
  );
}

export default UserList;
