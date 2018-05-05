const controller = require('./controller')

async function routes (fastify, options) {
    fastify.get('/cotacao', controller.getCotacao)
  }
  
  module.exports = routes