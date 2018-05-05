const model = require('./model')

const getRandomColor = function () {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

const getAtividades = async (request, reply) => {
    const data = model.selectAllAtividades()
    return data
  }

const createAtividade = async (request, reply) => {
    const color = getRandomColor()
    try {
      const data = await model.insertAtividade(request.body.nome, color)

      return data
    } catch (error) {
      return error
    }

}

const editAtividade = async (request, reply) => {
  const data = model.updateAtividade(request.body.id , request.body.nome)
  
  return data
}

const findAtividade = async (request, reply) => {
  const data = await model.selectAtividade(request.query.nome)
  
  return data
}

const excluirAtividade = async (request, reply) => {
  const data = model.deleteAtividade(request.query.nome)

  return data
}

  module.exports = {
      getAtividades,
      createAtividade,
      editAtividade,
      findAtividade,
      excluirAtividade
  }