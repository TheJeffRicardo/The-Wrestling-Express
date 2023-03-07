const express = require('express')

const path = require('path')

const bodyParser = require('body-parser')

const router = express.Router()

const {User, Superstar} = require('../modal')

const user = new User()

const superstar = new Superstar()

router.get('^/$|/YoMama', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'))
})

router.post('/login', bodyParser.json(), (req, res)=>{
    user.login(req, res);
})

router.get('/users', (req, res)=>{
    user.fetchUsers(req, res);
});

router.get('/user/:id', (req, res)=>{
    user.fetchUser(req, res);
});

router.put('/user/:id',bodyParser.json(), (req, res)=>{
    user.updateUser(req, res);
});

router.post('/register', bodyParser.json(), (req, res)=> {
    user.createUser(req, res);
})

router.delete('/user/:id', (req, res)=>{
    user.deleteUser(req, res);
});

router.get('/superstars', (req, res)=> {
    superstar.fetchSuperstars(req, res);
})

router.get('/superstar/:id', (req, res)=> {
    superstar.fetchSuperstar(req, res);
})

router.post('/superstar', bodyParser.json(), 
(req, res)=> {
    superstar.addSuperstar(req, res);
})

router.put('/superstar/:id', bodyParser.json(),
(req, res)=> {
    superstar.updateSuperstar(req, res);
})

router.delete('/superstar/:id', 
(req, res)=> {
    superstar.deleteSuperstar(req, res);
})

module.exports = router;