const dbPool = require('../config/db')


const getAllUsers = () => {
    const query = 'SELECT * from users'
     return dbPool.execute(query)
}

const createUser = (body) => {
    const query = `INSERT INTO users (name, email, address) VALUES ('${body.name}', '${body.email}', '${body.address}')`
    return dbPool.execute(query)
}

const updateUser = (body, id) => {
    const query = `UPDATE users SET name='${body.name}', email='${body.email}', address='${body.address}' where id=${id}`
    return dbPool.execute(query)
}
module.exports = {getAllUsers, createUser, updateUser}