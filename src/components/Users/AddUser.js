import "./AddUser.module.css";

export default function AddUser(props) {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("y");
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username"> Username</label>
      <input id="username" type="text">
        Username
      </input>
      <label htmlFor="age">Age (years)</label>
      <input id="age" type="number">
        Username
      </input>
      <button type="submit"> Add user</button>
    </form>
  );
}
