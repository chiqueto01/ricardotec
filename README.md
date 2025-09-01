# Lista de Tarefas — Como Rodar Backend e Frontend

Este repositório contém **dois projetos**:
- **Backend (Spring Boot)**: `listadetarefas-api`
- **Frontend (Angular)**: `listadetarefas-web`

> Recomendado: rode o **backend primeiro**, depois o **frontend**.

---

## ✅ Pré-requisitos

### Backend
- **Java JDK 17+**
- **Maven** (ou usar Maven Wrapper, se adicionado)
- IDE opcional: IntelliJ / Eclipse
- Cliente REST opcional: Postman / Insomnia

### Frontend
- **Node.js** (LTS) e **npm**
- **Angular CLI** global:
  ```bash
  npm install -g @angular/cli
  ```

---

## ⚙️ 1) Rodando o Backend (Spring Boot) — `listadetarefas-api`

### Configurações principais (já no projeto)
Arquivo: `src/main/resources/application.properties`
```properties
server.address=0.0.0.0
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
```

### Iniciar o servidor

#### Windows (PowerShell)
Entre na pasta do backend e rode:
```powershell
cd listadetarefas-api
mvn -U clean spring-boot:run
```
> Alternativas:
> - `mvn spring-boot:run`
> - Se usar Maven Wrapper (quando presente): `.\mvnw spring-boot:run`

#### Linux/Mac
```bash
cd listadetarefas-api
./mvnw spring-boot:run   # se houver wrapper
# ou
mvn -U clean spring-boot:run
```

### URLs úteis
- API Base: `http://localhost:8080/api/tarefas`
- H2 Console: `http://localhost:8080/h2-console`  
  - JDBC URL: `jdbc:h2:mem:testdb`  
  - User: `sa`  
  - Password: *(vazio)*

### Endpoints REST
| Método | Rota                | Corpo (JSON)                                        | Descrição              |
|------:|----------------------|-----------------------------------------------------|------------------------|
| GET   | `/api/tarefas`       | —                                                   | Lista todas as tarefas |
| POST  | `/api/tarefas`       | `{ "descricao": "Texto", "concluida": false }`     | Cria uma tarefa        |
| PUT   | `/api/tarefas/{id}`  | `{ "descricao": "Novo", "concluida": true }`       | Atualiza uma tarefa    |
| DELETE| `/api/tarefas/{id}`  | —                                                   | Remove uma tarefa      |

### Teste rápido (PowerShell / Bash)
```bash
# Criar
curl -X POST http://localhost:8080/api/tarefas -H "Content-Type: application/json" -d "{\"descricao\":\"Estudar Angular\",\"concluida\":false}"

# Listar
curl http://localhost:8080/api/tarefas

# Atualizar (id=1 como exemplo)
curl -X PUT http://localhost:8080/api/tarefas/1 -H "Content-Type: application/json" -d "{\"descricao\":\"Estudar Angular e Spring\",\"concluida\":true}"

# Deletar (id=1)
curl -X DELETE http://localhost:8080/api/tarefas/1
```

### Erros comuns (Backend)
- **`No plugin found for prefix 'spring-boot'`**  
  Você não está na pasta do `pom.xml` ou o `pom.xml` não tem o plugin do Spring Boot.  
  - Verifique com `dir pom.xml` (Windows) ou `ls pom.xml` (Linux/Mac).
  - Rode dentro de `listadetarefas-api`.
- **`mvn não é reconhecido`**  
  Maven não instalado / fora do PATH. Use IDE para rodar a classe `ListadetarefasApiApplication` ou adicione o **Maven Wrapper** e rode `.\mvnw spring-boot:run`.
- **Porta ocupada (8080)**  
  Finalize o processo que usa a porta ou altere a porta em `application.properties`:
  ```properties
  server.port=8081
  ```

---

## 💻 2) Rodando o Frontend (Angular) — `listadetarefas-web`

> Requisito: o backend deve estar rodando em `http://localhost:8080`.

### Instalar dependências
```bash
cd listadetarefas-web
npm install
```

### Subir o app
```bash
ng serve --open
```
Abrirá em: `http://localhost:4200`

### Integração com API
O serviço `tarefa.service.ts` usa a URL: `http://localhost:8080/api/tarefas`.  
O controlador backend está com **CORS liberado** (`@CrossOrigin(origins = "*")`), então o Angular consegue consumir a API diretamente.

### Erros comuns (Frontend)
- **`'app-task-list' is not a known element`**  
  Garanta que o `TaskListComponent` foi **importado** no `AppComponent` (standalone) e usado no `app.component.html`.
- **Erro de HttpClient**  
  Certifique-se de que o HttpClient foi habilitado (em projetos standalone mais novos via `app.config.ts` usando `provideHttpClient`).  
  *Caso seu Angular esteja configurado por módulo*, importe `HttpClientModule` no `AppModule`.
- **CORS**  
  Já está liberado no backend. Se mudar o backend, verifique `@CrossOrigin` ou configure um **proxy** Angular.

---

## 📦 Estrutura do repositório (resumo)
```
listadetarefas-api/                # Backend (Spring Boot)
  ├─ src/main/java/br/.../api/
  ├─ src/main/resources/application.properties
  └─ pom.xml
listadetarefas-web/                # Frontend (Angular)
  └─ src/app/...
README.md                          # Este guia
```

---

## ✅ Fluxo recomendado para desenvolver
1. Suba o **backend** e confirme a API (GET em `/api/tarefas`).
2. Suba o **frontend** e teste criar/editar/concluir/excluir.
3. Use o **H2 Console** para ver os dados persistidos em memória.

---

## 🙋 Suporte
Se quiser, posso gerar uma **coleção do Postman (JSON)** com os endpoints prontos para importar e testar. É só pedir!

Bom desenvolvimento! 🚀
