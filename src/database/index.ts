import { Client } from "pg";

export const client = new Client({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT)
});

export const startDatabase = async () => {
    await client.connect();
    console.log("Database connected.");
}