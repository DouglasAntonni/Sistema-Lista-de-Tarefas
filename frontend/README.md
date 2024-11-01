# Projeto de Lista de Tarefas com React e Supabase

Este é um projeto de lista de tarefas desenvolvido em React, com integração ao Supabase para armazenamento de dados. A aplicação permite criar, editar e excluir tarefas, além de realizar o download dos dados em JSON. O projeto utiliza modos claro e escuro, responsividade para dispositivos móveis e um design moderno.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface de usuário.
- **Styled-Components**: Biblioteca para estilização de componentes com suporte a temas e modo escuro.
- **Supabase**: Banco de dados e backend como serviço, utilizado para gerenciar o armazenamento das tarefas via API.
- **Postman**: Ferramenta utilizada para testes da API.
- **JavaScript (ES6)**: Linguagem principal do projeto.
- **HTML5 & CSS3**: Estruturação e estilização da interface.

## Funcionalidades Principais

1. **Adicionar Tarefas**: Crie novas tarefas com informações como nome, custo e data limite.
2. **Editar Tarefas**: Modifique os dados das tarefas diretamente na interface.
3. **Excluir Tarefas**: Remova tarefas indesejadas com um simples clique.
4. **Download JSON**: Baixe as tarefas em formato JSON para fácil integração com outras aplicações.
5. **Modo Claro/Escuro**: Interface personalizável com temas claros e escuros.
6. **Responsividade**: Interface adaptada para dispositivos móveis e desktops.

## Estrutura do Projeto



## Como Executar o Projeto Localmente

1. **Clone o repositório**:
   ```bash
   git clone [Sistema-Lista-de-Tarefas](https://github.com/DouglasAntonni/Sistema-Lista-de-Tarefas)
   cd nome-do-repositorio
Instale as dependências:

bash
Copiar código
npm install
Configuração do Supabase:

Crie uma conta no Supabase.
Configure o banco de dados para armazenar as tarefas.
Copie as chaves API_KEY e API_URL de seu projeto Supabase.
Configuração das Variáveis de Ambiente:

Crie um arquivo .env.local na raiz do projeto e adicione as variáveis:
env
Copiar código
REACT_APP_SUPABASE_URL=URL_DO_SEU_SUPABASE
REACT_APP_SUPABASE_ANON_KEY=SUA_CHAVE_SUPABASE
Inicie o projeto:

bash
Copiar código
npm start
A aplicação estará acessível em http://localhost:3000.

Como Consumir a API do Supabase no Postman
Siga estes passos para configurar o Postman e consumir a API de tarefas no Supabase:

Configuração de Variáveis no Postman:

Abra o Postman e vá até Environments.
Adicione um novo ambiente com as variáveis supabase_url e supabase_key.
No campo Initial Value, insira os valores das variáveis do Supabase.
Autenticação:

Para cada requisição, adicione a chave de autenticação.
Vá até a aba Headers e adicione:
apikey: Sua chave pública do Supabase.
Authorization: Bearer SUA_CHAVE_ANON.
Requisições CRUD:

Criar uma Tarefa
Método: POST
URL: {{supabase_url}}/rest/v1/tarefas
Headers:
json
Copiar código
{
  "apikey": "SUA_CHAVE_ANON",
  "Authorization": "Bearer SUA_CHAVE_ANON",
  "Content-Type": "application/json"
}
Body (JSON):
json
Copiar código
{
  "Nome": "Exemplo de Tarefa",
  "Valor": 500,
  "Data": "2024-12-31"
}
Listar Todas as Tarefas
Método: GET
URL: {{supabase_url}}/rest/v1/tarefas
Headers:
json
Copiar código
{
  "apikey": "SUA_CHAVE_ANON",
  "Authorization": "Bearer SUA_CHAVE_ANON"
}
Editar uma Tarefa
Método: PATCH
URL: {{supabase_url}}/rest/v1/tarefas?id=eq.TAREFA_ID
Headers:
json
Copiar código
{
  "apikey": "SUA_CHAVE_ANON",
  "Authorization": "Bearer SUA_CHAVE_ANON",
  "Content-Type": "application/json"
}
Body (JSON):
json
Copiar código
{
  "Nome": "Tarefa Atualizada",
  "Valor": 750
}
Excluir uma Tarefa
Método: DELETE
URL: {{supabase_url}}/rest/v1/tarefas?id=eq.TAREFA_ID
Headers:
json
Copiar código
{
  "apikey": "SUA_CHAVE_ANON",
  "Authorization": "Bearer SUA_CHAVE_ANON"
}
⚠️ Substitua TAREFA_ID pelo ID da tarefa que deseja editar ou excluir.

Deploy da Aplicação
Para publicar a aplicação, recomendo o Vercel ou o Netlify, que suportam projetos em React:

Vercel:

Configure o repositório do GitHub.
Configure as variáveis de ambiente REACT_APP_SUPABASE_URL e REACT_APP_SUPABASE_ANON_KEY na seção Environment Variables.
Clique em Deploy para publicar a aplicação.
Netlify:

Crie um novo site a partir do repositório.
Defina as variáveis de ambiente REACT_APP_SUPABASE_URL e REACT_APP_SUPABASE_ANON_KEY.
Importe o projeto e publique.
Com isso, sua aplicação React estará disponível na web!



Contato

Para dúvidas ou sugestões, entre em contato comigo pelos seguintes canais:

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DouglasAntonni/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/douglas-antonni-41097197/)