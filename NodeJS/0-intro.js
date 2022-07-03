const amount = 12
const interval = 100

if (amount < 10) {
    console.log('less than 10');
}
else{
    console.log('greater than 10')
}

console.log('Hey !')


const sayHi = (name) => {
  console.log(`hi ${name}`)
}

sayHi('shark')

console.log(__dirname) // C:\Users\HP\Let's Code\WEB DEV\BackEnd\Nodex\NodeJS

setInterval(() => {
  console.log('yo')
}, interval);