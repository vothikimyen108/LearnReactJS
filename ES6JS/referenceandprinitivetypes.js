//nếu kiểu nguyên thủy nó sẻ sao chép dữ liệu đó
const num1 = 1;
const num2 = num1; //1
console.log(num2)
//nếu kiểu object , array no sẻ tham chiếu trỏ đến cùng đối tượng đó
const person = {
    name:'yen'
}
const secondPerson = person
// điều này làm thay đổi giá trị name ở cả 2 đối tưởng vì nó chỉ trỏ đến 1 nơi
secondPerson.name = "kim Yến"
//xuất tra xem thử nhé
console.log(secondPerson);//{ name: 'kim Yến' }
console.log(person);//{ name: 'kim yến' }
//để khắc phục điều đó theo nghĩa là copy ta dùng spead(...)
const thirdPerson = {
    ...person
}
//thử đổi tên lại
thirdPerson.name = 'Vo Thi'
console.log(thirdPerson) //{ name: 'Vo Thi' }
console.log(person)//{ name: 'kim Yến' }