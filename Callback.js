function sum(a,b){
    console.log(a+b)
}

function calc(a,b,Callsum){
    Callsum(a,b)
}
calc(5,4,sum)

// Callback function means a function which is passed as an argument in another function.