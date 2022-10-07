type User = {
    name: String,
    age ?: Number,
    number ?: Number,
    email : String,
    
}

let user:User = {
  name:'Waqas',
  email: 'ansariwaqas310@gmail.com'
}

// explicit union 

type User2 = {
    name : String ,
    age ?: Number,
    number : Number,
    email ?: String
}

let std : User | User2 = {
    name : 'arman',
    number : 10,
}

// intersection 

type peom = {
   name: String,
   puslish : Number
}

type author = {
    name : String,
}

type Peom = peom & author

let PeomObj : Peom = {
    name : 'Abc Peom',
    puslish : 1999,
    // authName : 'Robert'
}


// danger intersection types 

type personBase = {name:string}
type Male = personBase & {type:'Male',beared: Boolean}
type Female = personBase & {type:'Female', makeup:Boolean}
type Persons = Male | Female

let Users : Persons = {
    name:'Waqas',
    type:'Male',
    beared: true
}
