const pool = require('../config/db')

const selectAllMaquinas = async function () {
    try {
        const result = await pool.query(`select * from "Maquinario"`)
        return result.rows
    } catch (error) {
        return error
    }
}

const selectMaquina = async function (nome) {
    try {
        const result = await pool.query(`select * from "Maquinario" where nome='${nome}'`)
        return result.rows
    } catch (error) {
        return error
    }
}

const insertMaquina = async function ({ nome, ano, valor }) {
    try {
        await pool.query(`insert into "Maquinario" ("nome", "ano", "valor_atual") values ('${nome}', '${ano}', '${valor}')`)
        return 'Cadastro realizado com sucesso'
    } catch (error) {
        return error
    }
}

const updateMaquina = async function (id, nome) {
    return {
        IdMaquina: id,
        Nome: nome,
    }
}

const deleteMaquina = async function (nome) {
    console.log(nome)
    try {
        const result = await pool.query(`delete from "Maquinario" where nome='${nome}'`)
        return 'Descarte realizado com sucesso'
    } catch (error) {
        return error
    }
}

module.exports = {
    selectAllMaquinas,
    selectMaquina,
    insertMaquina,
    updateMaquina,
    deleteMaquina
}