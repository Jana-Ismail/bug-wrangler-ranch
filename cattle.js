const { database } = require("./database.js")

const roundup = (herdSize) => {
    const cattle = []
    let cattleInHerd = ""
    const types = database.cattleTypes

    for (let i = 0; i < herdSize; i++) {
        const randomType = Math.floor(Math.random() * types.length)
        const animal = types[randomType]
        cattle.push(animal)
        if (i === herdSize - 1) {
            cattleInHerd += `${cattle[i].breed}`
        } else {
            cattleInHerd += `${cattle[i].breed}, `
        }
    }
    return cattleInHerd
    
}

module.exports = { roundup }