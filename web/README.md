# NLW Agents

Projeto desenvolvido durante o evento NLW (Next Level Week) da Rocketseat.

## 🚀 Tecnologias Utilizadas

### Core
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e bundler de alta performance

### Roteamento & Estado
- **React Router DOM** - Sistema de roteamento
- **TanStack Query** - Gerenciamento de estado server-side e cache

### Estilização
- **Tailwind CSS 4** - Framework CSS utility-first
- **Radix UI** - Componentes primitivos acessíveis
- **Shadcn/ui** - Sistema de componentes baseado em Radix UI
- **Lucide React** - Biblioteca de ícones
- **class-variance-authority** - Utilitário para variações de classes CSS

### Qualidade de Código
- **Biome** - Linter e formatter
- **Ultracite** - Ferramenta de análise de código
- **Husky** - Git hooks para qualidade de código

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── ui/          # Componentes de UI (shadcn/ui)
├── lib/
│   └── utils.ts     # Utilitários e helpers
├── pages/
│   ├── create-room.tsx
│   └── room.tsx
├── app.tsx          # Configuração de rotas e providers
├── main.tsx         # Entry point da aplicação
└── index.css        # Estilos globais
```

## 🛠️ Padrões de Projeto

- **Component Composition** - Uso de Radix UI para componentes compostos
- **Custom Hooks** - Hooks personalizados para lógica reutilizável
- **Path Mapping** - Imports absolutos usando `@/` alias
- **TypeScript Strict** - Configuração rigorosa do TypeScript

## 📦 Setup e Configuração

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd nwl_agents/web
```

2. Instale as dependências
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento
```bash
npm run dev
```

4. Acesse `http://localhost:5173`

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Visualiza o build de produção
```

## 🔧 Configuração do Ambiente

O projeto utiliza:
- **Vite** como bundler com hot reload
- **Tailwind CSS** com configuração customizada
- **TypeScript** com path mapping (`@/` aponta para `./src`)
- **Biome** para linting e formatação
- **Shadcn/ui** para componentes de interface

## 📱 Funcionalidades

- Criação de salas
- Navegação entre páginas
- Interface responsiva
- Componentes reutilizáveis

---

Desenvolvido com ❤️ durante o NLW da Rocketseat
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  }
```
