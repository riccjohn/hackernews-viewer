import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  border-radius: 5px;
  border: 1px solid black;
  height: 1.5em;
`;

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // TODO: disable submit button unless user/pass present and valid
  // TODO: display errors

  const updateUsername = (event: any): void => {
    setUsername(event.target.value);
  };

  const updatePassword = (event: any): void => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any): void => {
    alert(`Sumitting: ${username}`);
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <Input
            autoComplete="on"
            name="username"
            onChange={updateUsername}
            required={true}
            type="text"
            value={username}
          />
        </label>

        <label>
          Password:
          <Input
            autoComplete="on"
            name="password"
            onChange={updatePassword}
            required={true}
            type="password"
            value={password}
          />
        </label>

        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
};

export default LoginForm;
