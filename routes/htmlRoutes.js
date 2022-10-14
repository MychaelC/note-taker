//Dependencies
let fs = require("fs");
let uuidv1 = require("uuid/v1");

//Route
module.exports = function(app) {
    //API GET req
    //return saved notes in db.json
    app.get("/api/notes", (req, res) => {
        fs.readFile(__dirname + "/../db/db.json", (err, data) => )
    })
}