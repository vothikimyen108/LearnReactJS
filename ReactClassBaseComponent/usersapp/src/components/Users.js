import { Component } from "react";
import classes from "./Users.module.css";
import User from "./User";

class Users extends Component {
  //khai tào hàm thởi tạo
  constructor() {
    super();
    //dùng state trong class như sau dùng this.state => tạo object mới ghi, mỗi cái sate thì ghi 1 cái
    this.state = {
      showUsers: false,
    };
  }
  //khai báo hàm thay đối show user, dùng thì .this
  toggleUsersHandler() {
    //thay đổi state dùng this.etState
    this.setState((preState) => {
      return { showUsers: !preState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
