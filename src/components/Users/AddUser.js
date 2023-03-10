import { useState } from "react";

import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

export default function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
      return;

    if (enteredAge < 1) return;

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username"> Username</label>
        <input
          value={enteredUsername}
          id="username"
          type="text"
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          value={enteredAge}
          id="age"
          type="number"
          onChange={ageChangeHandler}
        />
        <Button type="submit" onClick={addUserHandler}>
          Add user
        </Button>
      </form>
    </Card>
  );
}
