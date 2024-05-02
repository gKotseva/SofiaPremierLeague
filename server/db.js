const mysql = require('mysql')

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'Sofia_Premier_League'
})

function executeQuery (sql, callback) {
    pool.query(sql, function(error, results, fields) {
        if (error){
            console.error('Error executing query: ' + error.message)
            return callback(error, null)
        }

        callback(null, results)
    })
}

module.exports = {
    executeQuery: executeQuery
}