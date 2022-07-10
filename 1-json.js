const fs = require('fs')
// const book = {
//     title: 'City of Bones',
//     author: 'Micheal Colloney',
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json',bookJSON)

// const DataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = DataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON= dataBuffer.toString()
const user = JSON.parse(dataJSON)
console.log("Before changing" , user)

user.name = "Bunny"
user.planet = "Pluto"
user.age=100030

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json',userJSON)
