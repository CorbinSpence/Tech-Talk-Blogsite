const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const routes = require('./controllers')
//const helpers = require('./utils/helpers')
const sequelize = require('./config/connection')

const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: true,
};

const server = express()
const PORT = process.env.PORT || 3001

// create personalized handlebar engine with helper methods
const hbObject = handlebars.create({})

server.use(session(sess))

// setting engine to hb instance
server.engine('handlebars', hbObject.engine)
server.set('view engine', 'handlebars')

server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(express.static(path.join(__dirname, "public")))

server.use(routes)

sequelize.sync({force: false}).then(()=>{
    server.listen(PORT, ()=>{console.log("Server is live at "+PORT+".")})
})