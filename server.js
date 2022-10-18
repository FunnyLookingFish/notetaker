// need
// GET /notes should return notes.html
// GET * should return index.html
// GET /api/notes
// POST /api/notes

const express = require("express");
const routes = require("./routes");
const api = require("./routes/apiRoutes");

const PORT = 3001;
const app = express();

app.use(routes);



app.listen(PORT, () =>
    console.log(`App is listening at http://localhost:${PORT}`)
);