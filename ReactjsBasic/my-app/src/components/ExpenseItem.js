//import css
import "./ExpenseItem.css";
//tạo hàm mới expense ra item h2
function ExpenseItem(props) {
  //   //khai báo các biến
  // const expenseDate = new Date(2021, 2, 3);
  //   const expenseTitle = "Car Insurance ";
  //   const expensePrice = 294.67;
  //nó chỉ trả về một thành phần html 1 phần tử gốc
  //nó k là html mà jxl k dùng class mà dùng className
  //dùng dấu {} để thêm các biến bên ngoài, date là một đối tượng cần chuyển về tostring
  //dùng props để hiện thị
  return (
    <div className="expense-item">
      <div>{props.date.toDateString}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
