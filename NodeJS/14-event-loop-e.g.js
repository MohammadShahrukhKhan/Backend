console.log('first')

setTimeout(() => {
    console.log('third')
}, 0);

setInterval(() => {
    console.log('fourth')
}, 3000);

console.log('second')