// 2 đứa này chỉ với dậu 3 chấm
//sread cú pháp này sao chép phần tử mảng, thuộc tính
// ta có một mảng
const number = [1,2,3];
// tạo một mảng cũ có các phần tử của mảng mới thêm một phần tử mới là 4
const newNumber = [...number,4]
//kết quả
console.log(newNumber) //[1,2,3,4] nếu k có ...(spread) thì sẻ là [[1,2,3],4]
// tạo đối tưởng peson
const peson = {
    name:'yen'
}
//tạo một newPerson
const newPerson = {
    ...peson,
    age:'20'
}
console.log(newPerson) // { name: 'yen', age: '20' }
//rest dùng đối số trong hàm với dấu .. tạo như một list
function filter(...args) {
    //lọc ra số bằng 1
    return args.filter(el=>el===1)
}
console.log(filter(1,2,3,4));//truyền vào 1 mảng // kết quả 1
