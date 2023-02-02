import mysql from 'mysql'
import * as dotenv from 'dotenv'
dotenv.config()

export const db = mysql.createConnection({
    host: process.env.MYSQLHOST || 'localhost',
    user: process.env.MYSQLUSER || 'root',
    password: process.env.MYSQLPASSWORD || 'password',
    database: process.env.MYSQLDATABASE || 'rbt'
})