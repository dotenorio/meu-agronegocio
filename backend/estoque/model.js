const selectAllMaquinas = async function () {
    return [
        {
            Nome: 'Maquina1',
            Ano: '2013',
            ValorAtual: '20000'
        },
        {
            Nome: 'Maquina2',
            Ano: '2014',
            ValorAtual: '30000'
        },
        {
            Nome: 'Maquina3',
            Ano: '2015',
            ValorAtual: '40000'
        },
        {
            Nome: 'Maquina4',
            Ano: '2016',
            ValorAtual: '50000'
        },
        {
            Nome: 'Maquina5',
            Ano: '2017',
            ValorAtual: '60000'
        },
        {
            Nome: 'Maquina6',
            Ano: '2018',
            ValorAtual: '70000'
        },
    ]
}

const selectMaquina = async function (id) {
    return {
        Nome: 'Maquina1',
        Ano: '2013',
        ValorAtual: '20000'
    }
}

const insertMaquina = async function (maquina) {
    return {
        nome: maquina
    }
}

const updateMaquina = async function (id, nome) {
    return {
        IdMaquina: id,
        Nome: nome,
    }
}

const deleteAtividade = async function (nome) {
    return 'Operação realizada com sucesso -> ' + nome
}

module.exports = {
    selectAllMaquinas,
    selectMaquina,
    insertMaquina,
    updateMaquina,
    deleteAtividade
}