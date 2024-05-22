const { database } = require("./database.js")

const cattleToDrive = 50
const hireDrovers = (herdSize) => {
    const drovers = []
    const allDrovers = database.drovers
    const droversNeeded = cattleToDrive / 10

    for (let counter = 0; counter < droversNeeded; counter++) {
        const randomHerderId = Math.floor(Math.random() * allDrovers.length)
        drovers.push(allDrovers[randomHerderId])
    }
    return drovers
}

module.exports = { cattleToDrive, hireDrovers }