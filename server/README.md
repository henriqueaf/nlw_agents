# NLW Agents

Projeto desenvolvido durante o evento **NLW Agents** da Rocketseat, construindo um backend em Node.js com TypeScript e PostgreSQL.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset JavaScript com tipagem estática
- **Fastify** - Framework web rápido e eficiente
- **PostgreSQL** - Banco de dados relacional
- **Drizzle ORM** - ORM moderno para TypeScript
- **Zod** - Validação de schemas e tipos

## 📋 Pré-requisitos

- Node.js 22.16.0 ou superior
- PostgreSQL
- npm ou yarn

## ⚙️ Configuração

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3333
DATABASE_URL=postgresql://usuario:senha@localhost:5432/nlw_agents
```

### 3. Executar migrations do banco

```bash
npm run db:seed
```

## 🔧 Scripts disponíveis

```bash
# Desenvolvimento com hot reload
npm run dev

# Produção
npm start

# Executar seed do banco
npm run db:seed
```

## 📁 Estrutura do projeto

```
src/
├── db/
│   ├── schema/          # Schemas do banco de dados
│   └── migrations/      # Migrations do Drizzle
├── http/
│   └── routes/          # Rotas da API
└── server.ts           # Servidor principal
```

## 🛠️ Padrões utilizados

- **Type Safety**: Tipagem forte com TypeScript e Zod
- **Schema Validation**: Validação automática com fastify-type-provider-zod
- **Database First**: Modelagem com Drizzle ORM
- **Environment Variables**: Configuração segura com validação Zod
- **Modern Node.js**: Uso do flag `--experimental-strip-types`

## 📝 API

A API roda por padrão na porta `3333` e inclui:

- `GET /health` - Health check
- `GET /rooms` - Lista de salas

## 🔗 CORS

Configurado para aceitar requisições do frontend em `http://localhost:5173`.

---

Desenvolvido com ❤️ durante o **NLW Agents** da [Rocketseat](https://rocketseat.com.br)
