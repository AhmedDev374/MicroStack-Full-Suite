/*
 * Copyright (C) 2025 Ahmed Atef Elnadi
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */


import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(setData);

    fetch('/api/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      <p>Redis: {data.redisMessage}</p>
      <p>Postgres Time: {data.dbTime}</p>

      <h2>Users from Database:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
