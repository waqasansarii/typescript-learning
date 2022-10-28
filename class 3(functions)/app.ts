function optional(name:string , age?:number){
    return name
}

console.log(optional('waqas'))


function defaultParam(name:string , age:Number=20){
    return name +' '+ age

}

console.log(defaultParam('waqas'))

function restParam (a:string , ...b:string[]){
    return a.concat(b.join(','))
}

console.log(restParam('a','b','c','d','e'))