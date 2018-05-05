const model = require('./model')

const getClima = async (request, reply) => {
    const data = model.find()
    return data
  }

  module.exports = {
      getClima
  }