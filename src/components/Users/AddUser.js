import styles from "./AddUser.module.css";
import Card from "../UI/Card";

export default function AddUser(props) {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("y");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username"> Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" />
        <button type="submit"> Add user</button>
      </form>
    </Card>
  );
}
