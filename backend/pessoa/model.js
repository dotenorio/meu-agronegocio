const pool = require('../config/db')

const selectAllPessoas = async function () {
    try {
        const result = await pool.query(`select * from "Pessoa"`)
        return result.rows
    } catch (error) {
        return error
    }
}

const selectPessoa = async function (nome) {
    try {
        const result = await pool.query(`select * from "Pessoa" where nome='${nome}'`)
        return result.rows
    } catch (error) {
        return error
    }
}

const insertPessoa = async function ({ nome, salario, tipoRegistro }) {
    try {
        await pool.query(`insert into "Pessoa" ("nome", "salario", "tipo_registro") values ('${nome}', '${salario}', '${tipoRegistro}')`)
        return 'Cadastro realizado com sucesso'
    } catch (error) {
        return error
    }
}

const verificaSalario = async (salario) => {
    if (salario) {
        console.log('salario')
        try {
            await pool.query(`update "Pessoa" set salario=${salario} where nome='${nome}'`)
            return
        } catch (error) {
            return error
        }
    }
}

const verificaRegistro = async (tiporegistro) => {
    if (tiporegistro) {
        console.log('tiporegistro')
        try {
            await pool.query(`update "Pessoa" set tipo_registro=${tiporegistro} where nome='${nome}'`)
            return
        } catch (error) {
            return error
        }
    }
}

const updatePessoa = async function ({ nome, salario, tiporegistro }) {
    await verificaSalario(salario)
    await verificaRegistro(tiporegistro)
    return 'Alteração realizada com sucesso'
}

const deletePessoa = async function (nome) {
    try {
        const result = await pool.query(`delete from "Pessoa" where nome='${nome}'`)
        return 'Descarte realizado com sucesso'
    } catch (error) {
        return error
    }
}

module.exports = {
    selectAllPessoas,
    selectPessoa,
    insertPessoa,
    updatePessoa,
    deletePessoa
}