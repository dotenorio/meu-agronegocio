const pg = require('pg')
const config = {
    user: 'postgres',
    database: 'meuAgronegocio',
    password: 'postgres',
    host: '172.16.255.136',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
}
const pool = new pg.Pool(config)

module.exports = pool