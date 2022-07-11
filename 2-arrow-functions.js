// const square = function(x){
//     return x*x
// }

// const square = (x)=>{
//     return x*x
// }

// const square = (x) => x*x

// console.log(square(2))

// const event = {
//     name: 'Birthday party',
//     printGuestList: function(){
//         console.log('Guest List for'+ this.name)
//     }
// }

// const event = {
//     name: 'Birthday party',
//     printGuestList: () => {
//         console.log('Guest List for: '+ this.name) // "this" is not accessible here 
//     }
// }

// const event = {
//     name: 'Birthday party',
//     printGuestList() {    //"this" working here
//         console.log('Guest List for: '+ this.name)
//     }
// }

// const event = {
//     name: 'Birthday party',
//     guestList: ['Hannah','Sarah','Mike'],
//     printGuestList() {    
//         console.log('Guest List for: '+ this.name)

//         this.guestList.forEach(function(guest){
//             console.log(guest + ' is attending ' + this.name) //"this" not working
//         })
//     }
// }

const event = {
    name: 'Birthday party',
    guestList: ['Hannah','Sarah','Mike'],
    printGuestList() {    
        console.log('Guest List for: '+ this.name)

        this.guestList.forEach((guest)=>{
            console.log(guest + ' is attending ' + this.name) //"this" working
        })
    }
}

event.printGuestList()