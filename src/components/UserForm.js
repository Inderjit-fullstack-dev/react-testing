import { useRef, useState } from "react";

function UserForm({ onUserAdded }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const nameRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email);
    onUserAdded({ name, email });
    setName("");
    setEmail("");
    nameRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          ref={nameRef}
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button>Save</button>
    </form>
  );
}

export default UserForm;
