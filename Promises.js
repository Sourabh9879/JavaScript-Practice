// // promises is used to solve callbackhell
// // promises > callback
// // three promises object 1) pending 2) rejected 3) fulfilled

// // let promise = new  Promise((resolve,reject) => {
// //     console.log("hello world")
// //     resolve(123)
// // })

// const getPromise = () => {
//    return new  Promise((resolve,reject) => {
//         console.log("hello world")
//         resolve("success")
//         // reject(" ntwrk error")
//     })
// }

// let promise = getPromise()
// promise.then ((res) => {
//     console.log("promise fulfilled",res)
// })

// promise.catch((err) => 
// console.log("rejected",err))

function asyncFunc1(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data1")
            resolve("success")
        }, 4000);
    })
}
function asyncFunc2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data2")
            resolve("success")
        }, 4000);
    })
}

console.log("fetching data1.....")
asyncFunc1().then((res) => {
    console.log("fetching data2.....")
    asyncFunc2().then((res) => {})
})