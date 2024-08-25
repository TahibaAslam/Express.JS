const express = require("express");
const app = express();
const path = require("path")
const bodyParser = require("body-parser")
const router = require("./userRoutes")
const port = 4000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use("/api/v1", router);
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
    });

app.listen(port, () => {
console.log(`Server is working on port: ${port}`);
})

// GET POST PUT DELETE
 