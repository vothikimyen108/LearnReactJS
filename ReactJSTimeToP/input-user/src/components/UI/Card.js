import style from "./Card.module.css";
const Card = (props) => {
  //{props.children} để xuất hiện mấy đứa con của nó
  return (
    <div className={`${style.card} ${props.className}`}> {props.children}</div>
  );
};
export default Card;
