// promises is used to solve callbackhell
// promises > callback
// three promises object 1) pending 2) rejected 3) fulfilled

// let promise = new  Promise((resolve,reject) => {
//     console.log("hello world")
//     resolve(123)
// })

const getPromise = () => {
   return new  Promise((resolve,reject) => {
        console.log("hello world")
        resolve("success")
    })
}

let promise = getPromise()
promise.then (() => {
    console.log("promise fulfilled")
})