const router = require('express').Router()

const ProductController = require('../controllers/products')


//VERBOS HTTP (4 TIPOS)
//GET - OBTER DADOS
//POST - ENVIAR/RECEBER DADOS
//PUT - ATUALIZAR DADOS
//DELETE - REMOVER   DADOS

router.get('/products/:id?', ProductController.get)
//router.post('/products/:id', ProductController.post)
//router.put('/products/:id', ProductController.put)
//router.delete('/products/:id', ProductController.delete)

module.exports = router