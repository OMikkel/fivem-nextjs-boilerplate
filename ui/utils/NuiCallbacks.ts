

/**
 * Connects to the fivem resource client.lua with payload
 * @param {String} endpoint A string with the intended endpoint e.g, "/setGPS"
 * @param {Object} data An object with the data to be sent
 * @param {Function} cb A callback that returns the result of the function
 * @example
 * 
 *  sendNuiCallback("/setGPS", {coords: {}}, (result) => {
 *      
 *  })
 */
const sendNuiCallback = async (endpoint: string, data: object, cb) => {
    await fetch(`https://${process.env.RESOURCE_NAME}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    })
    .then((res) => {
        res.json().then((data) => {
            cb(data)
        })
    })
}

export {
    sendNuiCallback
}