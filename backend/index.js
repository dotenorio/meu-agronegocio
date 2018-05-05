const fastify = require('fastify')()
const climaRoute = require('./clima/routes')
const cotacaoRoute = require('./cotacao/routes')
const valorRoute = require('./valor/routes')
const atividadeRoute = require('./atividade/routes')
const maquinaRoute = require('./maquina/routes')
const pessoaRoute = require('./pessoa/routes')
const estoqueRoute = require('./estoque/routes')

fastify.register(require('fastify-formbody'))
fastify.register(climaRoute)
fastify.register(cotacaoRoute)
fastify.register(valorRoute)
fastify.register(atividadeRoute)
fastify.register(maquinaRoute)
fastify.register(pessoaRoute)
//fastify.register(estoqueRoute)

fastify.listen(3000, function (err) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})