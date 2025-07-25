# Projeto Inovati

Este projeto é composto por:

- **Frontend**: Next.js
- **Backend**: Node.js (Express) + Prisma
- **Banco de Dados**: PostgreSQL via Docker

---

## 📁 Estrutura do Projeto

```
root/
├── backend/
├── frontend/
└── docker-compose.yml
```

---

## 🚀 Requisitos

- Docker + Docker Compose (apenas para o banco de dados)
- Node.js (recomendado: v18 ou superior)
- npm ou yarn

---

## 🐳 Subindo o Banco de Dados com Docker

No diretório raiz do projeto, execute:

```bash
docker-compose up -d db
```

Esse comando irá subir apenas o banco de dados PostgreSQL, disponível em `localhost:5432`.

---

## ⚙️ Backend (`/backend`)

### Instalar dependências

```bash
cd backend
npm install
```

### Prisma - Configurações

#### 1. Gerar o client do Prisma:

```bash
npx prisma generate
```

#### 2. Rodar migrations (se tiver schema definido):

```bash
npx prisma migrate dev
```

#### 3. Alternativamente, puxar estrutura existente do banco:

```bash
npx prisma db pull
```

### Rodar Backend

```bash
npm run dev
```

A API ficará disponível em: [http://localhost:3333](http://localhost:3333)

---

## 💻 Frontend (`/frontend`)

### Instalar dependências

```bash
cd frontend
npm install
```

### Rodar Frontend

```bash
npm run dev
```

Acesse em: [http://localhost:3000](http://localhost:3000)

---

## 🔗 Variáveis de Ambiente

### Backend (`backend/.env`)

```env
DATABASE_URL=postgresql://root:root@localhost:5432/inovati
```

---

## 📝 Comandos úteis do Prisma

- `npx prisma studio` – Interface visual para o banco
- `npx prisma generate` – Gerar client
- `npx prisma migrate dev` – Aplicar migrations em dev
- `npx prisma db pull` – Puxar estrutura de banco existente
- `npx prisma format` – Formatador de schema

---

## 📦 Deploy

Para deploy do frontend, considere usar o [Vercel](https://vercel.com). Para o backend, utilize serviços como [Railway](https://railway.app), [Render](https://render.com) ou servidores personalizados.

---

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Docker Docs](https://docs.docker.com/)