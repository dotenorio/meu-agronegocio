const controller = require('./controller')

async function routes (fastify, options) {
    fastify.get('/maquina/listar', controller.getMaquinas)
    fastify.get('/maquina/find', controller.findMaquina)
    fastify.post('/maquina/criar', controller.createMaquina)
    fastify.put('/maquina/editar', controller.editMaquina)
    fastify.delete('/maquina/apagar', controller.excluirMaquina)
  }
  
  module.exports = routes