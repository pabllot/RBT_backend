import mysql from 'mysql'
import * as dotenv from 'dotenv'
dotenv.config()

export const db = mysql.createPool({
    connectionLimit : 100,
    host: process.env.MYSQLHOST || 'localhost',
    user: process.env.MYSQLUSER || 'root',
    password: process.env.MYSQLPASSWORD || 'password',
    database: process.env.MYSQLDATABASE || 'rbt',
    connectionLimit: 100,
    queueLimit: 100,
    acquireTimeout: 1000000,
    connectTimeout: 30000,
    debug: false,
    port: 3306 || 7735
})

