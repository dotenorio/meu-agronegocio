const controller = require('./controller')

async function routes (fastify, options) {
    fastify.get('/valor', controller.getValor)
  }
  
  module.exports = routes