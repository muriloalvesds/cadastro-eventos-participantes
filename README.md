
# desafio_inovati

Aplicação fullstack para gerenciamento de eventos e participantes.

## Tecnologias
- Next.js (React + TypeScript)
- Tailwind CSS
- Node.js + Express
- TypeScript
- Prisma ORM
- PostgreSQL
- Docker e Docker Compose
- Jest e Supertest
- Prettier

## Como rodar

### Com Docker Compose
1. Configure as variáveis em `.env` e `backend/.env`.
2. Execute:
   ```
   docker-compose up --build
   ```

### Manualmente
- Frontend: `npm install && npm run dev` na raiz
- Backend: `cd backend && npm install && npm run dev`
- Banco: PostgreSQL local ou Docker

## Estrutura
Veja detalhes em `developer_notes/estrutura.md`.
