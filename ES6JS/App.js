//default export 
// import person from "./Peson";
// import prs from "./Peson";
//name export
// import './package.json'
import { baseData } from "./utilyty.js";
import { clean } from "./utilyty";
// đặt lại tên bằng as
import {baseData as shm} from "./utilyty.js"
// // export tất cả sau này dùng nó kiểu bundled.clean, bumdled.baseData
import * as bundled from "./utilyty.js"
console.log(shm);