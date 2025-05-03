import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/userSlice";

const UserForm = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (name.trim()) {
      dispatch(addUser(name));
      setName("");
    }
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter username" />
      <button onClick={handleAdd}>Add User</button>
    </div>
  );
};

export default UserForm;
