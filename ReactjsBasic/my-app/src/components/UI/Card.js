import "./Card.css";
function Card(props) {
  //khai báo biến classname để nhân thận classname
  const classes = "card " + props.className;
  //props.children hiện thị mấy thằng con trong nó
  return <div className={classes}>{props.children}</div>;
}
export default Card;
