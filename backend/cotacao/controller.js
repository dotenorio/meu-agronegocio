const model = require('./model')

const getCotacao = async (request, reply) => {
    const data = model.find()
    return data
  }

  module.exports = {
      getCotacao
  }