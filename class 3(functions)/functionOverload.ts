function overLoad(a:number,b:number): number ;
function overLoad(one:number,tow:number):number;
function overLoad(one:number,two:number,three?:number){
    if(three===undefined){

        return  two+one
    }else{
        return one + two + three
    }
}


overLoad(10,5)
overLoad(5,3,8)