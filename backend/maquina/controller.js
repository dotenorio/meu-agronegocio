const model = require('./model')

const getMaquinas = async (request, reply) => {
  const data = model.selectAllMaquinas()

  return data
}

const createMaquina = async (request, reply) => {
  const data = await model.insertMaquina({ nome: request.body.nome, ano: request.body.ano, valor: request.body.valor })

  return data
}

const editMaquina = async (request, reply) => {
  const data = await model.updateMaquina(request.body.id, request.body.nome)

  return data
}

const findMaquina = async (request, reply) => {
  const data = model.selectMaquina(request.query.nome)

  return data
}

const excluirMaquina = async (request, reply) => {
  const data = await model.deleteMaquina(request.query.nome)

  return data
}

module.exports = {
  getMaquinas,
  createMaquina,
  editMaquina,
  findMaquina,
  excluirMaquina
}