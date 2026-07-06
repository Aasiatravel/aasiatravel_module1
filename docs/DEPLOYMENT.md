# Hostinger VPS Deployment & CI/CD Guide - Aasia Travel

![Deploy Target](https://img.shields.io/badge/Deploy-Hostinger_VPS-8230D3?style=for-the-badge&logo=hostinger&logoColor=white)
![CI/CD Flow](https://img.shields.io/badge/CI/CD-GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Process Manager](https://img.shields.io/badge/Daemon-PM2_Worker-2B037A?style=for-the-badge)

This guide provides end-to-end instructions for configuring your Hostinger VPS, setting up reverse proxies with Nginx, daemonizing the Next.js process using PM2, and establishing automated CI/CD using GitHub Actions.

---

## Deployment Stack Overview

| Component          | Technology              | Purpose                                                        |
| :----------------- | :---------------------- | :------------------------------------------------------------- |
| **Server Engine**  | Ubuntu 22.04 LTS VPS    | Virtual Private Server host                                    |
| **Reverse Proxy**  | Nginx                   | Port forwarding, SSL termination, static gzip caching          |
| **Process Daemon** | PM2                     | Manages persistent Next.js background threads                  |
| **SSL Provider**   | Certbot (Let's Encrypt) | Automatically resolves and renews free SSL certificates        |
| **CI/CD Pipeline** | GitHub Actions          | Automatic compilation checks and remote SSH deployment on push |

---

## Step 1: Initialize Hostinger VPS Environment

Log in to your Hostinger VPS control panel (KVM console) or SSH directly:

```bash
ssh root@your_server_ip
```

Update system dependencies and install core utilities:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git curl nginx build-essential
```

### Install Node.js (via NVM) & PNPM

Install Node Version Manager (NVM) to resolve runtime dependencies:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 22
nvm use 22
```

Install the global packages (`pnpm` and `pm2`):

```bash
npm install -g pnpm pm2
```

---

## Step 2: Establish the Application Directory

Create the target deployment path under `/var/www/` and set proper user ownership permissions:

```bash
sudo mkdir -p /var/www/aasiatravel
sudo chown -R $USER:$USER /var/www/aasiatravel
```

Clone the repository to the folder:

```bash
git clone https://github.com/your-github-username/your-repo-name.git /var/www/aasiatravel
cd /var/www/aasiatravel
pnpm install
pnpm build
```

Start the application with PM2 to confirm setup:

```bash
pm2 start pnpm --name "aasia-travel" -- start
pm2 save
pm2 startup
```

---

## Step 3: Configure Nginx Reverse Proxy

Create an Nginx configuration file for your custom domain:

```bash
sudo nano /etc/nginx/sites-available/aasiatravel
```

Add the following configuration block (replace `yourdomain.com` with your actual domain):

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site configuration and restart Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/aasiatravel /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Install SSL via Let's Encrypt (Certbot)

Configure HTTPS SSL certifications:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## Step 4: Configure GitHub Actions CI/CD Secrets

To enable automated deployments on git push:

1. Generate an SSH keypair on your local machine or VPS:
   ```bash
   ssh-keygen -t rsa -b 4096 -C "github-actions-deploy"
   ```
2. Add the public key (`id_rsa.pub`) to the VPS authorized list:
   ```bash
   cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
   ```
3. Navigate to your GitHub Repository -> **Settings** -> **Secrets and variables** -> **Actions**.
4. Add the following repository secrets:

| Secret Name       | Value Example                         | Description                                   |
| :---------------- | :------------------------------------ | :-------------------------------------------- |
| `SSH_HOST`        | `185.120.45.10`                       | The public IP address of your Hostinger VPS   |
| `SSH_USER`        | `root` (or custom user)               | The SSH connection login name                 |
| `SSH_PRIVATE_KEY` | `-----BEGIN RSA PRIVATE KEY----- ...` | The private key generated (`id_rsa` contents) |

Once configured, any push to the `main` branch will automatically run tests, build the package on the runner, SSH into the VPS, pull the fresh changes, and reload PM2 instantly!
