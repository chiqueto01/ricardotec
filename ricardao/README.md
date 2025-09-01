# Projeto Lista de Tarefas

Este projeto demonstra a construção de um sistema completo de Lista de Tarefas (To-Do List), com **Backend em Spring Boot** e **Frontend em Angular**.

---

## ⚙️ Backend - Spring Boot (listadetarefas-api)

### Pré-requisitos
- **Java JDK 17+**
- **Maven**
- IDE (IntelliJ ou Eclipse)
- Cliente REST (Postman ou Insomnia)

### Como rodar
1. Acesse a pasta `listadetarefas-api`.
2. Compile e rode o projeto:
   ```bash
   ./mvnw spring-boot:run
   ```
   Ou execute a classe `ListadetarefasApiApplication.java` pela IDE.
3. A API ficará disponível em: `http://localhost:8080/api/tarefas`

### Banco de Dados H2
- Console: [http://localhost:8080/h2-console](http://localhost:8080/h2-console)
- Configuração de acesso:
  - JDBC URL: `jdbc:h2:mem:testdb`
  - User: `sa`
  - Password: (em branco)

---

## 💻 Frontend - Angular (listadetarefas-web)

### Pré-requisitos
- **Node.js** e **npm**
- **Angular CLI** (`npm install -g @angular/cli`)
- Editor (Visual Studio Code recomendado)

### Como rodar
1. Acesse a pasta `listadetarefas-web`.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o servidor de desenvolvimento:
   ```bash
   ng serve --open
   ```
4. O sistema abrirá no navegador em: [http://localhost:4200](http://localhost:4200)

---

## 🔗 Integração
- O backend deve estar rodando em `http://localhost:8080` antes de iniciar o frontend.
- O frontend consumirá a API automaticamente para listar, criar, atualizar e excluir tarefas.

---

## ✅ Testando o Sistema
- **Adicionar Tarefa**: digite no campo e clique em "Adicionar".
- **Marcar como concluída**: marque o checkbox.
- **Editar**: altere a descrição diretamente no input (já integrado).
- **Excluir**: clique no botão "Excluir".

---

## 📂 Estrutura do Projeto
```
listadetarefas-api/    # Backend (Spring Boot)
listadetarefas-web/    # Frontend (Angular)
```

---

## 🚀 Pronto!
Agora você tem um sistema completo de Lista de Tarefas rodando com **Spring Boot + Angular**!
