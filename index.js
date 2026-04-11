import express from "express"

const app = express()
const PORT = 6767

app.use(express.static("public"))

app.listen(PORT, () => {
    console.log("http://localhost:6767")
})