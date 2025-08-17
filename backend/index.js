/*
 * Copyright (C) 2025 Ahmed Atef Elnadi
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */


const express = require('express');
const redis = require('redis');
const { Pool } = require('pg');

const app = express();
const port = 5000;

// Redis client
const redisClient = redis.createClient({
  url: 'redis://redis:6379'
});
redisClient.connect();

// PostgreSQL client
const pool = new Pool({
  host: 'db',
  user: 'postgres',
  password: 'example',
  database: 'appdb',
  port: 5432,
});

app.get('/api', async (req, res) => {
  await redisClient.set('message', 'Hello from Redis!');
  const message = await redisClient.get('message');
  const result = await pool.query('SELECT NOW()');
  res.json({
    redisMessage: message,
    dbTime: result.rows[0].now,
  });
});
app.get('/api/users', async (req, res) => {
  const result = await pool.query('SELECT * FROM users');
  res.json(result.rows);
});


app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
