const express = require('express')

const path = require('path')

const bodyParser = require('body-parser')

const router = express.Router()

const {User, Superstar, Cart} = require('../modal')

const user = new User()

const superstar = new Superstar()

const cart = new Cart()

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

router.get('/items', (req, res)=> {
    superstar.fetchSuperstars(req, res);
})

router.get('/item/:id', (req, res)=> {
    superstar.fetchSuperstar(req, res);
})

router.post('/item', bodyParser.json(), 
(req, res)=> {
    superstar.addSuperstar(req, res);
})

router.put('/item/:id', bodyParser.json(),
(req, res)=> {
    superstar.updateSuperstar(req, res);
})

router.delete('/item/:id', 
(req, res)=> {
    superstar.deleteSuperstar(req, res);
})

router.get('/user/:id/cart',  
(req, res)=> {
    cart.cartFetch(req, res);
})

router.post('/user/:id/cart', bodyParser.json(), 
(req, res)=> {
    cart.cartAdd(req, res);
})

module.exports = router;