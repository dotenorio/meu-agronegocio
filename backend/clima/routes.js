const controller = require('./controller')

async function routes (fastify, options) {
    fastify.get('/clima', controller.getClima)
  }
  
  module.exports = routes