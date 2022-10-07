   
   // Objects 

//    nested object 
type address = {
    addres: String,
    city: String,
    postal : Number
}

type Person = {
    name: String,
    age : Number,
    address : address,
}

let person: Person = {
    name:'Waqas',
    age:22,
    address : {
        addres : 'xyz area',
        city: 'khi',
        postal : 539333
    }
}


// simple object 
type Car={
    model : String,
    make:String,
    price : Number
}
let car: Car = {
    model:'xyz',
    make:'honda',
    price : 454534
}



console.log(person,car)