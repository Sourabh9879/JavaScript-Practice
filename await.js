async function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("printing....")
            resolve(420)
        }, 3000)
})
}
async function Main(){
console.log("loading modules")

console.log("task 1 ")

let data = await getData()

console.log(data)

console.log("process data")
}

Main()