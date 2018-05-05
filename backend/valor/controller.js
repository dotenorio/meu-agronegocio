const model = require('./model')

const getValor = async (request, reply) => {
    const data = model.find()
    return data
  }

  module.exports = {
      getValor
  }