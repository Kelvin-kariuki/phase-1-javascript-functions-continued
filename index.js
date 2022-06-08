// code your solution here
// function saturdayFun(){
//     return `This saturday, I want to roller-skate!`
// }

// function saturdayFun(){
//     return "This Saturday, I want to roller-skate!"
//     // console.log("This Saturday, I want to roller-skate!")
// }

function saturdayFun(fun="roller-skate"){
    return `This Saturday, I want to ${fun}!`
}

function mondayWork(job = "go to the office"){
    return `This Monday, I will ${job}.`
}
// let result = "*";
// let emphatic = "a hard worker";
let  wrapAdjective = function(result= "*"){
    return function (emphatic="a hard worker"){
        return `You are ${result}${emphatic}${result}!`
    }
    
}