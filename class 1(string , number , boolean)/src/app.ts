var a:string = 'hello world';
let b : string = 'waqas'
const c : number = 10

interface dataType {
    id: number,
    name : string ,
    class : string,

}

const stdObj: dataType = {
    id : 1,
    name: 'waqas',
    class : 'matric'
}

let ter = stdObj.id>10 ? 'greater than 10' : '10'

let union : String | boolean | number[] ;
 union = [5]
 console.log(union)
console.log(a,stdObj)
union = true;
console.log(union)
union = 'string type'
console.log(union);


type obj ={
    name : string,
    age : number,
    male : boolean
}

let objt:obj = {
  name : 'wa',
  age:10,
  male : true
}

let amount : string | null = prompt('Enter amount')
let convert  = Number(amount) % 20
console.log(amount,convert)
// document.write()