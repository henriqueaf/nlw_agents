# NLW Agents

Um projeto full-stack para gerenciamento de salas e perguntas, desenvolvido com Node.js (backend) e React (frontend).

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## 🚀 Como executar o projeto com Docker

### 1. Clone o repositório

```bash
git clone git@github.com:henriqueaf/nlw_agents.git
cd nlw_agents
```

### 2. Execute o projeto

Antes de iniciar o projeto, crie o arquivo ./server/.env a partir do arquivo de exemplo e altere o que for necessário:

```bash
cp server/.env.example server/.env
```

Para iniciar todos os serviços (banco de dados, servidor e frontend):

```bash
docker-compose up -d
```

### 3. Acesse as aplicações

Após o Docker Compose terminar de subir os containers, você poderá acessar:

- **Frontend (Web)**: http://localhost:5173
- **Backend (API)**: http://localhost:3333
- **Drizzle Studio** (interface do banco): https://local.drizzle.studio/
- **PostgreSQL**: localhost:5432

## 🐳 Estrutura do Docker

O projeto utiliza 3 serviços Docker:

### 📦 Banco de Dados (pg)
- **Imagem**: `pgvector/pgvector:pg17`
- **Porta**: 5432
- **Banco**: `agents`
- **Usuário**: `postgres`
- **Senha**: `postgres`

### 🖥️ Servidor (server)
- **Porta**: 3333 (API)
- **Porta**: 4983 (Drizzle Studio)
- **Tecnologias**: Node.js, TypeScript, Drizzle ORM

### 🌐 Frontend (web)
- **Porta**: 5173
- **Tecnologias**: React, TypeScript, Vite, TailwindCSS

## 📝 Comandos úteis

### Parar os containers
```bash
docker-compose down
```

### Parar e remover volumes (apaga dados do banco)
```bash
docker-compose down -v
```

### Reconstruir os containers
```bash
docker-compose up --build
```

### Ver logs dos containers
```bash
# Todos os serviços
docker-compose logs

# Apenas um serviço específico
docker-compose logs server
docker-compose logs web
docker-compose logs pg
```

### Executar comandos dentro dos containers

```bash
# Acessar o container do servidor
docker-compose exec server sh

# Executar migrations do banco
docker-compose exec server npm run db:migrate

# Executar seed do banco
docker-compose exec server npm run db:seed
```

## 🔧 Desenvolvimento

### Estrutura do projeto

```
nlw_agents/
├── server/          # Backend (Node.js + TypeScript)
│   ├── src/
│   ├── docker/
│   └── Dockerfile
├── web/             # Frontend (React + TypeScript)
│   ├── src/
│   ├── docker/
│   └── Dockerfile
└── docker-compose.yml
```

## 📄 Licença

Este projeto está sob a licença MIT.
