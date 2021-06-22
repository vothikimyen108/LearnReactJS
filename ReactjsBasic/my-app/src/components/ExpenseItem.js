//import css
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "./Card";
//tạo hàm mới expense ra item h2
function ExpenseItem(props) {
  //   //khai báo các biến
  // const expenseDate = new Date(2021, 2, 3);
  //   const expenseTitle = "Car Insurance ";
  //   const expensePrice = 294.67;
  // const month = props.date.toLocaleString("en-US", { month: "long" }); //lấy tháng "en-us" ngôn ngữ ở đâu
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" }); //lấy năm
  // const year = props.date.getFullYear();
  //nó chỉ trả về một thành phần html 1 phần tử gốc
  //nó k là html mà jxl k dùng class mà dùng className
  //dùng dấu {} để thêm các biến bên ngoài, date là một đối tượng cần chuyển về tostring
  //dùng props để hiện thị
  return (
    <Card className="expense-item">
      <ExpenseDate date ={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
