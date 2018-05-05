const controller = require('./controller')

async function routes (fastify, options) {
    fastify.get('/estoque/listar', controller.getprodutos)
    fastify.get('/estoque/find', controller.findproduto)
    fastify.post('/estoque/criar', controller.createproduto)
    fastify.put('/estoque/editar', controller.editproduto)
    fastify.delete('/estoque/apagar', controller.excluirproduto)
  }
  
  module.exports = routes