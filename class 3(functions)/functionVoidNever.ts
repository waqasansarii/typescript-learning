let result ; 

const voidFunction = (one:any , two : any) : void =>  {
    if(one===undefined || two===undefined){
        return ;
    }else{
        result = one
    }
}


const neverFunction = () : never =>{
    throw new Error('Error is coming')
}