# [MiguelRyan.dev](https://miguelryan.dev)

This repository contains the source code for [miguelryan.dev](https://miguelryan.dev), a personal website designed and maintained as a self-hosted project. The site is built using **Vite**, **JavaScript**, and **npm**, and is being gradually developed and refined.

## Project Overview

The site is served from a home-hosted Linux server using **Caddy** as the web server. A CI/CD pipeline has been set up using **GitHub Actions**, which builds the site and automatically deploys any updates pushed to the `main` branch.

This setup allows for near-instant updates without relying on third-party hosting services, giving full control over deployment and hosting.

## Stack

- **Frontend**: JavaScript, HTML, CSS
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Package Manager**: [npm](https://www.npmjs.com/)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions)
- **Web Server**: [Caddy](https://caddyserver.com/)

## Running Locally

To run the project locally:

```bash
git clone https://github.com/yourusername/miguelryandev.git
cd miguelryandev
npm install
npm run dev
```
The development server will start at http://localhost:5173

## Deployment

Deployments are handled automatically through GitHub Actions:

The site is built using npm run build

The contents of the dist/ directory are securely transferred to the live server via SSH

Files are served immediately by Caddy

## Ongoing Work
The site is currently under development mainly to make it prettier.
