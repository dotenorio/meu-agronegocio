const controller = require('./controller')

async function routes (fastify, options) {
    fastify.get('/pessoa/listar', controller.getPessoas)
    fastify.get('/pessoa/find', controller.findPessoa)
    fastify.post('/pessoa/criar', controller.createPessoa)
    fastify.put('/pessoa/editar', controller.editPessoa)
    fastify.delete('/pessoa/apagar', controller.excluirPessoa)
  }
  
  module.exports = routes