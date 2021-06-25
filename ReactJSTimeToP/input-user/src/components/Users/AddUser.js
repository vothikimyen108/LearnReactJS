import Card from "../UI/Card";
import style from "./AddUser.module.css";
import Button from "../UI/Button";
const AddUser = () => {
  const addUserHandler = (event) => {
    //không cho gưi form
    event.preventDefault();
  };

  return (
    <Card className={style.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;
