// Destructoring

const obj = {
    name : 'Diogo',
    age: 32,
    cars : {
        nameCar : 'hb20'
    }
}

//console.log(obj.name, obj.age)

const { name, age, lastName } = obj
const { name, age, cars } = obj

console.log(name, age)

const { name } = cars

console.log(name)

// Comparações

if(1 == '1')
if(1 === '1')

function coiso(a){
    alert(a)
}
const a = 'teste'
button.addEventListener('click', function(a){
    coiso(a)  
});