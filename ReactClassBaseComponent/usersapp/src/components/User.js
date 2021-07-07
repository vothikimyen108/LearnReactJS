import classes from "./User.module.css";
import { Component } from "react";

//tạo lớp mới là user kết thừa lớp compoment trong react js
class User extends Component {
  //render mã jsx
  //xài props tad thùng this. thuộc tính
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
export default User;
