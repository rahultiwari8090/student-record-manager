📘 Student Record Manager

A production-ready Node.js + Express + MongoDB backend application containerized using Docker, deployed on Render, monitored using Prometheus + Grafana, and automated with a GitHub Actions CI/CD pipeline.

🌐 Live Deployment

🔗 Backend Live URL: https://student-record-manager-aiy0.onrender.com/

📑 Table of Contents

Overview

Features

Tech Stack

Project Structure

Environment Variables

Local Setup (Without Docker)

Docker Setup

Docker Compose Setup

CI/CD – GitHub Actions

Monitoring – Prometheus & Grafana

Health Check Route

Deployment Summary

Challenges Faced

📘 Overview

This backend allows you to manage student records using APIs. It includes CRUD operations, authentication utilities (if added later), and uses MongoDB Atlas for cloud hosting.

This project was created as part of Full Stack Development – Week 4 Assignment focusing on:

Docker

Docker Compose

Cloud Deployment

CI/CD

Monitoring & Health Checks

⭐ Features

✔ CRUD for students
✔ MongoDB Atlas integration
✔ Dockerfile + docker-compose setup
✔ GitHub Actions CI/CD
✔ Prometheus metrics endpoint
✔ Grafana dashboard
✔ /health status route
✔ Fully deployed on Render

🛠 Tech Stack

Backend: Node.js, Express
Database: MongoDB Atlas
Deployment: Render
DevOps: Docker, Docker Compose, GitHub Actions
Monitoring: Prometheus, Grafana

📂 Project Structure
student-record-manager/
│── backend/
│   ├── server.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── prometheus.yml
│   └── package.json
│
├── docker-compose.yml
├── .github/workflows/deploy.yml
└── README.md

🔐 Environment Variables

Create a .env file:

PORT=4000
MONGO_URI=your-mongodb-atlas-uri
JWT_SECRET=your-secret

▶ Local Setup (Without Docker)
cd backend
npm install
npm start


Server runs at: http://localhost:4000

🐳 Docker Setup
Build Docker Image:
docker build -t student-manager .

Run Container:
docker run -p 4000:4000 student-manager

🐳 Docker Compose Setup

Run backend + MongoDB + Prometheus + Grafana:

docker compose up --build


Services included:

Backend → http://localhost:4000

Prometheus → http://localhost:9090

Grafana → http://localhost:3000

🔁 CI/CD – GitHub Actions

The project includes a workflow:

.github/workflows/deploy.yml


What it does:

Installs dependencies

Builds Docker image

Runs tests (if added)

Deploys on Render automatically (optional)

📊 Monitoring – Prometheus & Grafana
Prometheus

Scrapes metrics from backend:
http://backend:4000/metrics

Grafana

Dashboard available at Docker:
http://localhost:3000

You can import:

Node.js metrics panel

HTTP request monitoring

Custom charts

📸 Grafana screenshot should be added here

💓 Health Check Route
GET /health


Response:

{ "status": "ok", "message": "Server is running" }


Used by:

Prometheus

Render deployment checker

📦 Deployment Summary
✔ Dockerization

Created Dockerfile

Added .dockerignore

Local image build & run tested

✔ Docker Compose

Backend + MongoDB + Prometheus + Grafana

All services connected

Verified internal networking

✔ Cloud Deployment

Code pushed to GitHub

Render deployed backend

Connected MongoDB Atlas

App live and accessible

✔ CI/CD

GitHub Actions workflow created

Automates builds & deployment

✔ Monitoring

Prometheus scraping configured

Grafana dashboard created

Added /metrics & /health endpoints

⚠ Challenges Faced

Fixing Docker networking issues between Node.js & MongoDB

Render deployment failures due to missing environment variables

Correct setup of Prometheus scrape targets

Grafana metrics panel not showing data initially

Ensuring local (Docker) and cloud (Render) configs work simultaneously
