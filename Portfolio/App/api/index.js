const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require("./models/user.model")
const post = require('./models/post.model')



app.use(cors())
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/user')

app.post('/createpost', async (req, res) => {
    try {
        const post = await post.create({
            post_title: req.body.post_title,
            post_dec: req.body.post_dec,
            post_cat: req.body.post_cat,
            post_tag: req.body.post_tag,
        })
        res.json({ status: "ok" })
    } catch (err) {
        res.json({ status: "error", error: 'Duplicate Post' })
    }
    res.json({ status: "ok" })
})




app.post('/register', async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({ status: "ok" })
    } catch (err) {
        res.json({ status: "error", error: 'Duplicate Email' })
    }
    res.json({ status: "ok" })
})

app.post('/login', async (req, res) => {

    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    })
    if (user) {
        return res.json({ status: "ok", user: "true" })
    } else {
        res.json({ status: "error", user: "false" })

    }
})

app.listen(4000, () => {
    console.log('server is start on 4000')
})