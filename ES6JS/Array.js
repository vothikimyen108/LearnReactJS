//ôn lại array nha kkk
//map array là một method(phương thức) tạo một mảng mới từ các thành phần trong mảng biến tấu nó thay đổi phần tử trong mảng
//tảo một bảng số
const numbers = [1, 2, 3];
//nhân đôi các phần tử lên trong mảng bằng map
const multiplyNumbers = numbers.map((num) => {
  return num * 2; //[1*2,2*3,3*3]
});
console.log(multiplyNumbers); //[ 2, 4, 6 ]
// find là một method trả về phần từ đầu tiên được tìm thấy trong mảng đáp ứng yêu cầu thực hiện trong funtion không tìm thấy trả về undefined
const findNumber = numbers.find((num) => {
  return num > 1;
});
console.log(findNumber); //2
// findindex là một methob trả về vị trí đầu tiên... như find nếu k tìm thấy trả về -1
const findIndexNumber = numbers.findIndex((num) => {
  return num > 1;
});
console.log(findIndexNumber); //1
// filter phương thức này tạo ra một mảng mới nó sẻ lọc và lấy tất cả phần từ nào đáp ứng yêu cầu của hàm.
const filterNumber = numbers.filter((num) => {
  return num <= 2;
});
console.log(filterNumber); //[1,2]
//reduce là một phương thức sẻ trả về một giá trị cụ thể thực thi hàm đó kết quả a tiếp tục dùng kết quả đó thực thi tiếp nôm na hiểu dậy
//reduce có tối thiểu 4 đối số
// Accumulator
// Current Value
// Current Index
// Source Array
const totalNumber = numbers.reduce((num1,num2)=>{
  return num1+num2; 
})
console.log(totalNumber)//6 
//giải thích gọi lần 1 num1(Accumulator) = 1, num2(Current Value) = 2 => 1+2 = 3 (return value) currentIndex = 1  array [1,2,3]
//giải thích gọi lần 2 num1(Accumulator) = 3(giá trị tổng hiện tại), num2(Current Value)(giá trị mảng tiếp theo) = 3 => 3+3 = 6 (return value) currentIndex = 2  array [1,2,,3]
 //contact gộp 2 mảng thành một mảng mới
const animals =["cat","dog"];
const newAnimals =["mouse"];
console.log(animals.concat(newAnimals))//[ 'cat', 'dog', 'mouse' ]
//Phương thức slice () trả về một bản sao cạn của một phần mảng vào một đối tượng mảng mới được chọn từ đầu đến cuối 
console.log(animals.slice(-1));//[ 'dog' ]
//splice() thay đổi mảng chèn thêm phần từ từ vị stat end
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');//vị trí 1 chèn fed
console.log(months)