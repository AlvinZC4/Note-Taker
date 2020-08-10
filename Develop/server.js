const express = require("express")
const path = require("path")
const fs = require("fs")

const app = express()
const PORT = 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

let notes

// API routes

app.get("/api/notes", function(req, res) {
    console.log("this path works...")
    fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", function(err, data) {

        if (err) {
            return console.log(err)
        }
        let allNotes = JSON.parse(data)
        console.log(allNotes)
        // res.json(data)
        notes = allNotes
        // res.json(allNotes)

        console.log(notes)
        res.json(notes)
    })
})

app.post("/api/notes", function(req, res){
    let newNote = req.body

})



// Routes

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"))
})

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"))
})






app.listen(PORT, function() {
    console.log("Note Taker listening on PORT: " + PORT)
})