// 1
class Account {
    constructor(login, email) {
        this.login = login,
        this.email = email
    }

    getInfo() {
        return `login: ${this.login}, email: ${this.email}`
    }
}

let account = new Account('dadsasd', 'hsaiahd@')
console.log(account.getInfo());


// 2
class User {
    constructor({name, age, followers}) {
        this.name = name,
        this.age = age,
        this.followers = followers
    }

    getInfo() {
        return `user: ${this.name} has: ${this.age} years old and ${this.followers} followers`
    }
}

let user = new User({
    name: 'dahuisds',
    age: 3,
    followers: 5
})
console.log(user.getInfo());


// 3
class Storage {
    constructor(items = []) {
        this.items = items
    }

    getItems() {
        return this.items
    }

    addItem(item) {
        this.items.push(item)
        return this.items
    }

    removeItem(item) {
        if (this.items.includes(item)) {
            let index = this.items.indexOf(item)
            this.items.splice(index, 1)
            return this.items
        }
    }
}

let storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
])
console.log(storage.getItems());
console.log(storage.addItem('aaaa'));
console.log(storage.removeItem('aaaa'))


// 4
class StringBuilder {
    constructor(value) {
        this._value = value
    }

    get value() {
        return this._value
    }

    appendFunk(str) {
        return this._value += str
    }

    prependFunk(str) {
        return this._value = str + this._value
    }

    padFunk(str) {
        return this._value = str + this._value + str
    }
}

const builder = new StringBuilder('.');

builder.appendFunk('^');
console.log(builder.value); // '.^'

builder.prependFunk('^');
console.log(builder.value); // '^.^'

builder.padFunk('=');
console.log(builder.value); // '=^.^='


// 5
class Car {
    static getSpecs(car) {
        return car.maxSpeed, car.speed, car.isOn, car.distance, car.price
    }

    constructor({speed = 0, price, maxSpeed, isOn = false, distance = 0}) {
        this.speed = speed,
        this.price = price,
        this.maxSpeed = maxSpeed,
        this.isOn = isOn,
        this.distance = distance
    }

    get price() {
        return this._price
    }

    set price(newPrice) {
        this._price = newPrice
        return this.price
    }

    turnOn() {
        this.isOn = true
        return this.isOn
    }

    turnOff() {
        this.isOn = false
        return this.isOn
    }

    accelerate(value) {
        if (value <= this.maxSpeed) {
            this.speed += value
            return this.speed
        }
    }

    decelerate(value) {
        if (value >= 0) {
            this.speed -= value
            return this.speed
        }
    }

    drive(hours) {
        if (this.isOn == true) {
            this.distance = hours * this.speed
            return this.distance
        }
    }
}

let mustang = new Car({ price: 2000, maxSpeed: 200 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000


// let newName = prompt()
// let but = document.querySelector('.but')

// class Animal {
//     constructor(name, type){
//         this.name = name,
//         this.type = type
//     }

//     changeName(newname) {
//         return this.name = newname
//     }
// }

// let animal = new Animal('hauewipdh', 'bbdbdbdb')
// console.log(animal);

// but.addEventListener('click', () => {
//     animal.changeName(newName);
//     console.log(animal);
// })








// let but = document.querySelector('.but')
// let modal = document.querySelector('.modal')
// let close = document.querySelector('.modal-close')
// let modalBut = document.querySelector('.modal-but')
// let p = document.querySelector('.modal-text')
// let modalRandom = document.querySelector('.modal-random')

// but.addEventListener('click', () => {
//     modal.classList.remove('none')
// })

// close.addEventListener('click', () => {
//     modal.classList.add('none')
// })

// modalBut.addEventListener('click', () => {
//     p.textContent = p.textContent ? '' : 'like'
// })

// modalRandom.addEventListener('click', () => {
//     let x = Math.floor(Math.random() * window.innerWidth)
//     let y = Math.floor(Math.random() * window.innerHeight)
//     modal.style.position = 'absolute'
//     modal.style.top = `${y}px`
//     modal.style.left = `${x}px`
// })




// let select = document.querySelector('.select')
// let text = document.querySelectorAll('.text')
// let resultBut = document.querySelector('.result-but')

// let results = {
//     you: 0,
//     computer: 0,
//     n: 0
// }


// resultBut.addEventListener('click', () => {
//     let comp = Math.floor(Math.random() * 3);

//     if (arr[comp] == 'stone' && select.value != 'stone') {
//         if (select.value == 'scissors') {
//             results.computer++;
//         } else {
//             results.you++;
//         }
//     } 
//     else if (arr[comp] == 'scissors' && select.value != 'scissors') {
//         if (select.value == 'stone') {
//             results.you++;
//         } else {
//             results.computer++;
//         }
//     }
//     else if (arr[comp] == 'paper' && select.value != 'paper') {
//         if (select.value == 'scissors') {
//             results.you++;
//         } else {
//             results.computer++;
//         }
//     }
//     else {
//         results.n++;
//     }

//     text[0].textContent = results.you;
//     text[1].textContent = results.computer;
//     text[2].textContent = results.n;
// });













// let arr = ['crcds', 'dewd', 'grtg', 'brtbfrg', 'pkopae']
// console.log(arr.sort());

// let arr2 = [
//     {skill: 'crcds'},
//     {skill: 'dewd'},
//     {skill: 'grtg'},
//     {skill: 'brtbfrg'},
//     {skill: 'pkopae'},
// ]
// let a = arr2.sort()
// console.log(a.map(b => b.skill));

// let a = ["h","o","l","a"]
// console.log(a.join(','))

// let b = 'dnjind h jn  cnoenc     '.split(' ')
// console.log(b);

// for (const i of b) {
//     if (i.length > 2) {
//         i[0].toUpperCase()
//         console.log(i);
//     }
// }