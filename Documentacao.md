# 📄 Documentação - Teste Técnico

## 🛠️ Ajustes Realizados no Docker

Durante o desenvolvimento do teste técnico, foram feitos os seguintes ajustes e configurações no docker:

- Correção do *hot reload* no Angular.
- Mapeamento adequado de volumes no Docker.
- Inclusão do serviço MySQL 8 para persistência dos dados de tarefas.

---

## 🚀 Como Executar o Projeto

1. **Subir os containers com Docker:**

   ```bash
   docker compose up --build -d
   ```

2. **Instalar dependências do backend:**

   ```bash
   cd backend
   composer install
   cp .env.example .env
   ```

3. **Executar as migrations no container Laravel:**

   ```bash
   docker compose exec laravel php artisan migrate:fresh
   ```

---

## 🧱 Estrutura do Projeto

### Backend (Laravel)

```
backend/
├── app/
│   ├── Http/
│   │   ├── Controllers/  # Controla a entrada e saída da requisição
│   │   │   ├── Controller.php
│   │   │   └── Tarefa/      # Diretório para tudo o que envolver tarefas (modular)
│   │   │       └── TarefaController.php
│   │   ├── Data/ # DTOs para padronização das informações a serem transitadas
│   │   │   └── Tarefa/ # DTOs da entidade tarefa
│   │   │       └── TarefaData.php
│   │   ├── Middleware/
│   │   │   └── CorsMiddleware.php
│   │   ├── Repositories/ # Tudo o que é de operação com o banco fica em repositories
│   │   │   └── Tarefa/
│   │   │       └── TarefaRepository.php
│   │   └── Services/ # Tudo o que for de regra de negócio fica nos services
│   │       └── Tarefa/
│   │           └── TarefaService.php
│   ├── Models/ # Entidades
│   │   ├── Tarefa.php
│   │   └── User.php
│   Demais pastas do laravel…
```

**Observações técnicas:**

- Utilizei a biblioteca spatie/data para tratamento de DTOs, garantindo validação e consistência dos dados trafegados entre camadas.
- As rotas foram separadas entre visualização (web) e API, utilizando um middleware de autenticação baseado em token (definido no .env e enviado via Angular).

**Nota:** A implementação do backend foi concluída sem dificuldades.

### Frontend (Angular)

```
frontend/
├── .angular/
├── .vscode/
├── node_modules/ [dependências do Node.js]
├── src/
│   ├── app/
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── core/ # o 'coração da aplicação'
│   │   │   ├── application/
│   │   │   │   └── services/ # serviços que lidam com a lógica de aplicação
│   │   │   │       └── tarefa.service.ts
│   │   │   ├── domain/
│   │   │   │   ├── models/ # Define as estruturas/entidades de dados usadas
│   │   │   │   │   └── tarefa.model.ts
│   │   │   │   ├── repositories/ # Interage com a camada de dados, atuando como um intermediário entre a aplicação e a infraestrutura
│   │   │   │   │   └── tarefa.repository.ts
│   │   │   │   └── use-cases/ # Implementa a lógica específica de negócios
│   │   │   │       ├── adicionar-tarefa.usecase.ts
│   │   │   │       ├── listar-tarefas.usecase.ts
│   │   │   │       └── remover-tarefa.usecase.ts
│   │   │   ├── infrastructure/ # Contém implementações relacionadas à comunicação com APIs externas ou internas
│   │   │   │   └── api/
│   │   │   │       ├── tarefa-http.repository.ts
│   │   │   │       └── token.interceptor.ts
│   │   │   ├── presentation/ # Agrupa componentes relacionados às páginas ou visões da aplicação
│   │   │   │   └── pages/
│   │   │   │       └── tarefas/
│   │   │   │           ├── tarefa-item.component.html
│   │   │   │           ├── tarefa-item.component.scss
│   │   │   │           ├── tarefa-item.component.ts
│   │   │   │           ├── tarefas.component.html
│   │   │   │           ├── tarefas.component.scss
│   │   │   │           └── tarefas.component.ts
│   │   │   └── shared/ # Contém reutilizáveis que podem ser usados em várias partes da aplicação.
│   │   │       └── components/ # Componentes genericos
│   │   │           ├── buttons/
│   │   │           │   ├── button.component.html
│   │   │           │   ├── button.component.scss
│   │   │           │   └── button.component.ts
│   │   │           └── inputs/
│   │   │               ├── input.component.html
│   │   │               ├── input.component.scss
│   │   │               └── input.component.ts
│   ├── assets/
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── .editorconfig
├── .gitignore
├── angular.json
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

**Observações técnicas:**

- A arquitetura segue o padrão core/domain/infrastructure/presentation, facilitando a separação de responsabilidades e manutenção do código.
- Foram criados *use cases* específicos para operações de tarefa: adicionar, listar e remover.
- A autenticação é feita via *interceptor*, com envio automático de token nas requisições HTTP.

**Nota:** Como minha experiência anterior era com AngularJS, Vue (2 e 3) e React Native, enfrentei certa dificuldade inicial com o padrão de componentes do Angular moderno. Também houve desafios com o funcionamento do *hot reload* no docker, que foram resolvidos com base em discussões do Stack Overflow.
