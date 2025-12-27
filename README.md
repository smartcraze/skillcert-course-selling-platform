## installtion

```bash
sudo apt update && sudo apt upgrade -y
```
```bash
sudo apt install -y build-essential curl wget git unzip
```

##  Node.js (Proper Way using NVM)

Never install Node via `apt` directly.

### Install NVM

```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Reload shell:

```bash
source ~/.bashrc
```

### Install Node (LTS)

```bash
nvm install --lts
nvm use --lts
```

Verify:

```bash
node -v
npm -v
```

##  Bun 

Since you use **Bun + TypeScript**.

```bash
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc
```

Verify:

```bash
bun -v
```

---

## 5. PM2 (Process Manager – Mandatory for Backend)

Used in production everywhere.

```bash
npm install -g pm2
```

Verify:

```bash
pm2 -v
```

---

## 6. Nginx (Reverse Proxy)

Required to expose frontend/backend on port 80/443.

```bash
sudo apt install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx
```
Check:

```bash
systemctl status nginx
```


## create reverse proxy 
```bash
sudo rm sudo vi /etc/nginx/nginx.conf
sudo vi /etc/nginx/nginx.conf
```


```nginx

events {
    # Event directives...
}

http {
	server {
    listen 80;
    server_name be1.100xdevs.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
	}
}

```

```bash
sudo nginx -s reload
```




## 7. Firewall (Important on VM)

```bash
sudo ufw allow OpenSSH
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```

Check:

```bash
sudo ufw status
```

## 9. Project Setup (Example)

```bash
git clone <repo-url>
cd project
bun install   # or npm install
```

Run backend:

```bash
pm2 start index.ts --name backend
pm2 save
```

---

## 10. Frontend (Vite Fix on VM)

**Important:** Vite must listen on `0.0.0.0`

```bash
bun run dev -- --host 0.0.0.0
```

or in `vite.config.js`:

```js
server: {
  host: '0.0.0.0',
  port: 5173
}
```
