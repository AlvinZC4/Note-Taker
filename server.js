const express = require("express")
const path = require("path")
const fs = require("fs")
const Note = require("./public/notes")

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

let notes

// API routes

app.get("/api/notes", function(req, res) {
    fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", function(err, data) {

        if (err) {
            return console.log(err)
        }
        let allNotes = JSON.parse(data)
        notes = allNotes
        res.json(notes)
    })
})

app.post("/api/notes", function(req, res){
    let addNote = req.body
    const newNote = new Note(addNote.title, addNote.text)
    notes.push(newNote)
    let notesStringify = JSON.stringify(notes)

    fs.writeFile(path.join(__dirname, "/db/db.json"), notesStringify, function(err){
        if (err) {
            console.log(err)
        }
        res.writeHead(200)
        res.end()
    })
})

app.delete("/api/notes/:noteId", function(req, res) {
    let noteId = req.params.noteId
    
    let noteDel = notes.filter(del => del.id !== noteId)
    notes = noteDel
    let notesStringify = JSON.stringify(notes)

    fs.writeFile(path.join(__dirname, "/db/db.json"), notesStringify, function(err){
        if (err) {
            console.log(err)
        }
        res.writeHead(200)
        res.end()
    })
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