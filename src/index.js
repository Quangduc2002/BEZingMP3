const express = require("express")
require('dotenv').config()
const app = express()
const cors = require("cors")
const port = process.env.PORT || 5000
const ZingMp3Router = require("./Router/ZingRouter")


// Page Home
app.get("/", (req, res) => {
    res.send('SERVER ON')
})

// ZingMp3Router
app.use("/zingApi", cors({ origin: '*' }), ZingMp3Router)


app.listen(port, () => {
    console.log(`Start server listen at http://localhost:${port}`)
});