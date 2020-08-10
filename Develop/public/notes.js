const generateId = require("./noteid")

class Note {
    constructor(title, text) {
        this.id = generateId()
        this.title = title
        this.text = text
    }
}

module.exports = Note