const fs = require('fs').promises;

async function getSimpsons() {
    const file = await fs.readFile('./simpsons.json', 'utf-8')
    
    return JSON.parse(file)
}

async function setSimpsons(simpsons) {
    const file = fs.writeFile('./simpsons.json', JSON.stringify(simpsons))
}

module.exports = { getSimpsons, setSimpsons }
