import React, { useState } from "react";
import UserDisplayer from "./UserDisplayer";
import UserForm from "./UserForm";

export interface User {
  name: string;
  email: string;
  mode: "light" | "dark";
}

const UserWrapper = () => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    mode: "light",
  });
  return (
    <div>
      <UserDisplayer user={user} />
      <UserForm user={user} setUser={setUser} />
    </div>
  );
};

export default UserWrapper;
