---
applyTo: '**'
---
# Contexto do Projeto
Desenvolver uma aplicação fullstack para gerenciar eventos e participantes, avaliando boas práticas e domínio da stack.

## Requisitos
- Back-end: Node.js, TypeScript, Express.js, Prisma/Sequelize/TypeORM, PostgreSQL
- Front-end: React, TypeScript, Next.js
- Não usar bibliotecas de UI prontas (Material UI, Bootstrap etc). Pode usar styled-components ou Tailwind.
- Centralizar magic strings e erros
- Clean code e arquitetura de camadas
- Documentação em /developer_notes
- Interface padrão fintech (#EEE416, #1D1D1B, fundo branco suavizado)
- Utilizar Context API ou Redux para estado global
- Usar migrations para criação do banco

## Funcionalidades obrigatórias
- POST /events: Cadastrar evento (nome, descrição, data)
- POST /participants: Cadastrar participante (nome, e-mail, telefone)
- POST /events/:eventId/participants: Inscrever participante em evento
- GET /events/:eventId/participants: Listar participantes de um evento
- Página de listagem de eventos
- Página de detalhes de evento (com participantes)
- Formulário para criação de eventos e inscrição de participantes
- Axios para requisições

## Avaliação
- Organização e estrutura do código
- Clareza na implementação
- Uso correto de TypeScript
- Separação de responsabilidades
- Boas práticas de versionamento
- Aplicação funcional e navegável

## Observações
- Não adicionar comentários no código
- Seguir arquitetura de camadas
- Centralizar erros e magic strings
- Interface fintech
- Documentação em /developer_notes