const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=> {
    console.log(`it's over now ${name}, ${id}`)
})

customEmitter.on('response', ()=> {
    console.log(`my life is good`)
})

customEmitter.emit('response', 'john', 34)

