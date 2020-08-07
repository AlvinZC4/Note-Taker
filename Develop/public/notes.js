const generateId = require("./noteid")

class Notes {
    constructor(content) {
        this.content = content
        this.id = generateId()
    }
}

module.exports = Notes