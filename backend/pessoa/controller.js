const model = require('./model')

const getPessoas = async (request, reply) => {
  const data = await model.selectAllPessoas()

  return data
}

const createPessoa = async (request, reply) => {
  const data = await model.insertPessoa({ nome: request.body.nome, salario: request.body.salario, tipoRegistro: request.body.tiporegistro })

  return data
}

const editPessoa = async (request, reply) => {
  console.log(request.body.tiporegistro)
  const data = await model.updatePessoa({ nome: request.body.nome, salario: request.body.salario, tiporegistro: request.body.tiporegistro })

  return data
}

const findPessoa = async (request, reply) => {
  const data = await model.selectPessoa(request.query.nome)

  return data
}

const excluirPessoa = async (request, reply) => {
  const data = await model.deletePessoa(request.query.nome)

  return data
}

module.exports = {
  getPessoas,
  createPessoa,
  editPessoa,
  findPessoa,
  excluirPessoa
}