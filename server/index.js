
const express = require("express");
const { json } = require("body-parser");
const mc = require(__dirname + "/controllers/messages_controller"); //messages_controller = mc

const app = express();

app.use(json());
app.use( express.static(__dirname + '/../public/build' ) );
console.log(__dirname)
// POST for CREATE   -C-
// GET for READ      -R-
// PUT for UPDATE    -U-
// DELETE for DELETE -D-
const messagesBaseURL = "/api/messages";
app.post(messagesBaseURL, mc.create);
app.get(messagesBaseURL, mc.read);
app.put(`${messagesBaseURL}/:id`, mc.update);
app.delete(`${messagesBaseURL}/:id`, mc.delete);



const port = 3000;
app.listen(port,()=>{ console.log(`this server is listening...${port}`); } );