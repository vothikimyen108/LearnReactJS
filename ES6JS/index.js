//Bài 01 let và const
// let name = "yến"
// name ='kim yen';
// console.log(name);
// const myName = "yến"
// //myName ='kim yen';
// console.log(myName);
// const không thay đổi định nghĩa được 1 lần(hằng)
// Bài 02 arrow funtion
const printMyName = (name) => {
    console.log(name);
}
//sử dụng 1 đối số có thể không cần dấu ()
printMyName('yen');
const printMyName1 = name => {
    console.log(name);
}
printMyName1('yen');
//dùng 2 đối sổ trở lên cần dấu ()
const printMyName2 = (name,age) => {
    console.log(name,age);
}
printMyName2('yen',21);
// cách 1
const multiply = (number) => {
    return number*2;
}
console.log(multiply(2));
// cách 2 không cần dùng return
const multiply1 = (number) => number*2;

console.log(multiply1(2));
// cách 3 không cần dùng return, không dùng dấu ()
const multiply2 = number => number*2;
console.log(multiply2(2));
// // class ES6
// //tạo một lớp Human
// class Human {
//     //hàm khởi tạo
//     constructor() {
//         this.gender = "male"
//     }
//     //phương thức
//     printGender() {
//         console.log(this.gender)
//     }
// }
// //tạo một person kế thừa Human
// class Peson extends Human {
//     constructor() {
//         // khai bao lại biến cha
//         super()
//         //sẻ có thuộc tính mới
//         this.name = "yến"
//         //ghi đè lại thuộc tính cũ
//         this.gender = "female"
//     }
//     //có thêm thương thức mới
//     printName() {
//         console.log(this.name)
//     }
// }
// //khai bao tạo một người mới
// const person = new Person();
// //gọi các phương thức
// person.printName();
// person.printGender();
// class ES7 hiện đại và ngắn gọn hơn
//tạo một lớp Human
class Human {
    //hàm khởi tạo
    gender = "male"
    //phương thức
    printGender = () => {
        console.log(this.gender)
    }
}
//tạo một peson kế thừa Human
class Person extends Human {
    name = "yến"
    gender = "female"
    //có thêm thương thức mới
    printName = ()=> {
        console.log(this.name)
    }
}
//khai bao tạo một người mới
const peson = new Peson();
//gọi các phương thức
person.printName();
person.printGender();