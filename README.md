![Three-Tier Architecture](img.jpg)

# Docker Microservices Starter

> A full‑stack microservices setup with React (frontend), Node.js/Express (backend), PostgreSQL, Redis, Nginx (reverse proxy), and Adminer, all orchestrated with Docker Compose.

---

##  Table of Contents

- [Overview](#overview)  
- [Architecture](#architecture)  
- [Prerequisites](#prerequisites)  
- [Installation & Setup](#installation--setup)  
- [Usage](#usage)  
- [Environment Variables](#environment-variables)  
- [Project Structure](#project-structure)
- [Troubleshooting](#Troubleshooting)  
- [Testing](#testing) *(if applicable)*  
- [Contact](#contact)  

---

## Overview

This repository demonstrates a small, production‑like microservices environment using containers:

1. **Frontend** – SPA UI (React or plain HTML/JS)
2. **Backend** – REST API (Node.js/Express)  
3. **Database** – PostgreSQL for persistence
4. **Cache** – Redis for caching / sessions / rate‑limiting
5. **Reverse Proxy** – Nginx routing traffic to UI and API
6. **DB Admin** – Adminer for quick DB inspection

All services are isolated and connected on a Docker network via Docker Compose for easy local dev and reproducible demos.

Repository: ```https://github.com/AhmedDev374/docker-microservices-starter```
   
---

## Architecture

```plaintext
┌──────────┐        ┌──────────┐        ┌──────────────────┐
│          │  HTTP  │          │  SQL   │                  │
│ Frontend ├────────► Backend  ├────────►  PostgreSQL DB   │
│ (React)  │        │ (Express)│        │                  │
└────┬─────┘        └────┬─────┘        └──────────────────┘
     │                   │
     │  HTTP             │  TCP
     ▼                   ▼
  ┌───────┐          ┌────────┐
  │ Nginx │◄────────►│ Redis  │
  └───────┘          └────────┘
        ▲
        │
        ▼
    ┌────────┐
    │Adminer │ (DB UI)
    └────────┘
```
Typical endpoints (adjust if you change ports):

- **Nginx (entrypoint):** http://localhost:80
- **Frontend (direct):** http://localhost:3000
- **Backend API (direct):** http://localhost:3001
- **Adminer:** http://localhost:8080

---

## Prerequisites

Before running the project, ensure you have the following installed on your system:

1. **Docker** – 24.x or later
2. **Docker Compose** – v2.x (bundled with recent Docker Desktop)

Verify:

```plaintext
docker --version
docker compose version
```

---

## Installation & Setup

1. **Clone the repository**:
```plaintext
git clone https://github.com/AhmedDev374/docker-microservices-starter.git
cd docker-microservices-starter
```

2. **Copy the environment template (if applicable):**:
```plaintext
cp .env.example .env  # or create .env if none exists
```
Then open .env and set your environment variables (DB credentials, ports, etc.).

3. **Build & start all services:**:
```plaintext
docker compose up --build
```

3. **Access the application:**:
- Through Nginx (recommended): http://localhost

- Adminer (DB UI): http://localhost:8080
   - **System:** PostgreSQL
   - **Server/Host:** ```postgres```
   - **User:** from ```.env```
   - **Password:** from ```.env```
   - **Database:** from ```.env```

---

## Usage

- **Frontend:** Navigate to the UI and follow the on-screen instructions (e.g., create, read, update, delete functionality).
- **Backend API:** Use tools like curl or Postman:
```plaintext
curl http://localhost:3001/api/resource
```
---

## Environment Variables

Below are common  ```.env```  variables (modify as necessary):
```plaintext
DB_HOST=postgres
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name

BACKEND_PORT=3001
FRONTEND_PORT=3000
```
---

## Project Structure
```plaintext
three-tier-app/
├── frontend/          # UI code (HTML/CSS/JS or React/Vue)
├── backend/           # API server code (Express, etc.)
├── docker-compose.yml
├── .env
└── README.md
```
---

## Usage

- **Frontend:** Navigate to the UI and follow the on-screen instructions (e.g., create, read, update, delete functionality).
- **Backend API:** Use tools like curl or Postman:
```plaintext
# For backend:
cd backend
npm test

# For frontend:
cd frontend
npm test
```

---

## Contact

For questions or feedback, reach out to Ahmed at



1. **LinkDin**: https://eg.linkedin.com/in/ahmed-atef-elnadi-8165a51b9

---

