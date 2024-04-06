// promises is used to solve callbackhell
// promises > callback

let promise = new  Promise((resolve,reject) => {
    console.log("hello world")
    resolve(123)
})