import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../features/userSlice";

const UserList = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
          <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
