const fs = require('fs')
for (let i = 0; i < 6; i++) {
    fs.writeFileSync('./content/subfolder2/result.txt', `i am shark ${i}\n`, {flag: 'a'}) 
}
