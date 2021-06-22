
//import css
import "./ExpenseItem.css";
//tạo hàm mới expense ra item h2
function ExpenseItem() {
    //nó chỉ trả về một thành phần html 1 phần tử gốc
    //nó k là html mà jxl k dùng class mà dùng className
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
