import React from "react";
import { User } from "./UserWrapper";

interface UserFormProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserForm = ({ user, setUser }: UserFormProps) => {
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (ev.target.name !== "light" && ev.target.name !== "dark") {
      ev.preventDefault();

      setUser({
        ...user,
        [ev.target.name]: ev.target.value,
      });
    } else {
      setUser({
        ...user,
        mode: ev.target.value as "light" | "dark",
      });
    }
  };

  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={(ev) => handleChange(ev)}
        />
      </label>
      <label>
        Email
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Mode
        <div>
          <label>
            Light
            <input
              type="radio"
              value={"light"}
              name="light"
              checked={user.mode === "light"}
              onChange={handleChange}
            />
          </label>
          <label>
            Dark
            <input
              type="radio"
              value={"dark"}
              name="dark"
              checked={user.mode === "dark"}
              onChange={handleChange}
            />
          </label>
        </div>
      </label>
      <input type="submit" value="send user data" />
    </form>
  );
};

export default UserForm;
