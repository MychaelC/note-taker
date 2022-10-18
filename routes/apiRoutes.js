//Dependencies
let fs = require("fs");
let {v4:uuidv4} = require("uuid");

//Route
module.exports = function(app) {
    //API GET req
    //return saved notes in db.json
    app.get("/api/notes", (req, res) => {
        fs.readFile(__dirname + "/../db/db.json", (err, data) => {
            if (err) throw err;
            let storedNotes = JSON.parse(data);
            return res.json(storedNotes);
        })
    });

    //API POST request and save notes
    app.post('/api/notes', (req, res) => {
        const newNote = req.body;
        let savedNotes = [];

        fs.readFile(__dirname + '/../db/db.json', 'utf-8', (err, data) => {
            if (err) throw err;

            savedNotes = JSON.parse(data);

            newNote.id = uuidv4();
            savedNotes.push(newNote);

            fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(savedNotes), 'utf-8', err => {
                if (err) throw err;
                res.end();
            })
        })
    })
    //API DELETE/notes

    app.delete('/api/notes/:id', (req, res) => {
        let noteTBD = req.params.id;

        fs.readFile(__dirname + '/../db/db.json', 'utf-8', (err, data) => {
            if (err) throw err;

            let restNotes = JSON.parse(data).filter((entry) => {
                return entry.id != noteTBD;
                //minus !==
            });

            fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(restNotes), 'utf8', err => {
                if (err) throw err;
                res.end();
            })
        })
    })
}