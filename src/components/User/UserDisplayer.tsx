import React from "react";

interface UserDisplayerProps {
  user: {
    name: string;
    email: string;
    mode: "light" | "dark";
  };
}

const UserDisplayer = ({ user }: UserDisplayerProps) => {
  return (
    <div>
      <h5>{user.name}</h5>
      <h5>{user.email}</h5>
      <h5>{user.mode}</h5>
    </div>
  );
};

export default UserDisplayer;
