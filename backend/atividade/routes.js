const controller = require('./controller')

async function routes (fastify, options) {
    fastify.get('/atividade/listar', controller.getAtividades)
    fastify.get('/atividade/find', controller.findAtividade)
    fastify.post('/atividade/criar', controller.createAtividade)
    fastify.put('/atividade/editar', controller.editAtividade)
    fastify.delete('/atividade/apagar', controller.excluirAtividade)
  }
  
  module.exports = routes