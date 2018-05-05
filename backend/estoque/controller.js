const model = require('./model')

const getProdutos = async (request, reply) => {
    const data = model.selectAllProdutos()
    
    return data
  }

const createProduto = async (request, reply) => {
    const data = model.insertProduto(request.body.nome)

    return data
}

const editProduto = async (request, reply) => {
  const data = model.updateProduto(request.body.id , request.body.nome)
  
  return data
}

const findProduto = async (request, reply) => {
  const data = model.selectProduto(request.query.nome)
  
  return data
}

const excluirProduto = async (request, reply) => {
  const data = model.deleteProduto(request.query.nome)

  return data
}

  module.exports = {
      getProdutos,
      createProduto,
      editProduto,
      findProduto,
      excluirProduto
  }