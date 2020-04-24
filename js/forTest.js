function sayHi (age) {
    console.log(`Привет, меня зовут ${this.name}, мне ${age} года`, this)
};
function info (...args) {
    console.log(`Меня зовут ${this.name}, у меня есть ${args}`)
}


const person = {
    name: "Rinat",
    age: 33,
    mood: "Отличное",
    hi: sayHi,
    own: "разум"
}

//info.apply(person, ["самокат", "велосипед"])          Вызов функции и передача контекста Person и доп.аргументов


const person2 = {
    name: "Dinara"
}

// let dinara = person.hi.bind(person2)
// dinara(33)

function multBy (num) {
    return function (n) {
        return console.log(num*n)
    }
}

let makeItDouble = multBy(2)
let makeItTripple = multBy(3)


// makeItDouble(6)
// makeItTripple(6)

//Задание, как в новую функцию передать КОНТЕКСТ и ФУНКЦИЮ, в которой будет замкнут контекст
function bind (context, foo) {
    return function (...args) {
        foo.apply(context,args)
    }
}

iHave = bind(person, info);  //инициализация пременной
//iHave("огонь")               // ее исполнение



//Создание асинхронной функции
function delay(ms) {
    setTimeout(()=>{
        console.log(`Delay is ${ms/1000} seconds`)
    }, ms)
}
//delay(4000)           //Вызов асинхронной функции задержки(милисекунд)

console.log("Start")
const p = new Promise(function(resolve,reject) {
    setTimeout(()=>{
    console.log("Getting data...")
    const data = {name:"Rinat", age: 33}
    resolve(data)
    },1000)
})

p.then((recivedData) => {
    return p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            recivedData.staus = "married"
            resolve(recivedData)
        }, 1000)
    })

//     p2.then(()=> {
//         console.log("Changed data:", recivedData)
//     })
}).then((newData) => {
    console.log("Recieved data", newData)
    newData.Iq = 150
    return newData
}).then((myData) => {
    console.log("Final changed data", myData)
})
.catch(err => console.error("Error is: ", err))
.finally(() => console.log("Done"))


console.log("End")