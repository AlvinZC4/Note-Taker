const generateId = () => {
    const charList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")
    let noteId = ""
    let ranIndex
    
    const randomIndex = () => {
        ranIndex = Math.floor(Math.random() * charList.length)
        return ranIndex
    }

        for (let i = 0; i < 12; i++) {
            let char = randomIndex()
            noteId += charList[char]
        }
        
    console.log(noteId)
    return noteId
    }

module.exports = generateId