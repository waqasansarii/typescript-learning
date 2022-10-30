// function type variable 
let showTable : ()=> number[] | string[];

showTable = ()=>{
    return [20,30,5]
}
showTable =()=> [2,5,9,5]

showTable=()=>['khi','isb','lhr']


// array of function type 

let calc : ((a:number,b:number)=> number)[]=[]

let add = (a:number,b:number)=> a+b
let sub = (a:number,b:number)=> a-b
let Multiply = (a:number,b:number)=> a*b

calc.push(add)
calc.push(sub)
calc.push(Multiply)

calc.forEach((items)=>{
    console.log(items(30,25))
})



// rest operator 

function sum(...nos:number[]){
    return nos.reduce((no,total)=>no + total)
}

console.log(sum(10,55,34,76,64))

// tuples rest 

function addNum (a:number,b:number,c:number){
    return a+b
}

let nums : [number,number,number] = [10,45,8]

console.log(addNum(...nums))


let tuples = [20,45] as const

