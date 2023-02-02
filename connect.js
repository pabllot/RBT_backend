import mysql from 'mysql'
import * as dotenv from 'dotenv'
dotenv.config()

export const db = mysql.createPool({
    connectionLimit : 100,
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    connectionLimit: 100,
    queueLimit: 100,
    acquireTimeout: 1000000,
    connectTimeout: 30000,
    debug: false,
    port: 3306
})

