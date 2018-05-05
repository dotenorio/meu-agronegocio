const pool = require('../config/db')

const selectAllAtividades = async function () {
    try {
        const result = await pool.query(`select * from "Atividade"`)

        return result.rows

    } catch (error) {

        return error
    }
}

const selectAtividade = async function (nome) {
    try {
        const result = await pool.query(`select * from "Atividade" where descricao='${nome}'`)
        return result.rows
    } catch (error) {
        return error
    }
}

const insertAtividade = async function (atividade, color) {
    try {
        await pool.query(`insert into "Atividade" ("descricao", "cor") values ('` + atividade + `','` + color + `')`)
        return 'Cadastro realizado com sucesso'
    } catch (error) {
        return error
    }
}

const updateAtividade = async function (id, nome) {
    return {
        IdAtividade: id,
        Nome: nome,
        Cor: '#52A89B'
    }
}

const deleteAtividade = async function (nome) {
    try {
        const result = await pool.query(`delete from "Atividade" where descricao='${nome}'`)   
        return 'Descarte realizado com sucesso'
    } catch (error) {
        return error
    }
}

module.exports = {
    selectAllAtividades,
    selectAtividade,
    insertAtividade,
    updateAtividade,
    deleteAtividade
}