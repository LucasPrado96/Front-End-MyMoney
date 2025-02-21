<h1 align="center">MyMoney</h1>
<p align="center">
  Aplicação de controle financeiro desenvolvida em TypeScript, que permite gerenciar transações de custos e ganhos com base em categorias personalizadas. 
  O MyMoney fornece gráficos detalhados para visualizar os gastos por categoria e a evolução financeira mês a mês, incluindo gastos, ganhos e saldo.
</p>

---

<h2>📊 Funcionalidades</h2>
<ul>
  <li><strong>Gerenciamento de Transações:</strong>
    <ul>
      <li>Registrar custos e ganhos.</li>
      <li>Categorizar transações (ex.: contas, alimentação, lazer).</li>
      <li>Visualização detalhada das transações por categoria.</li>
    </ul>
  </li>
  <li><strong>Criação de Categorias:</strong>
    <ul>
      <li>Criar e personalizar as categorias utilizadas nas transações.</li>
    </ul>
  </li>
  <li><strong>Gráficos e Análises:</strong>
    <ul>
      <li>Gráficos de despesas por categoria.</li>
      <li>Gráfico de evolução financeira mensal (gastos, ganhos e saldo).</li>
    </ul>
  </li>
</ul>

---

<h2>🛠️ Tecnologias Utilizadas</h2>
<ul>
  <li><strong>Frontend:</strong>
    <ul>
      <li>React com TypeScript</li>
      <li>Vite para desenvolvimento rápido</li>
      <li>Axios para consumo da API</li>
      <li>Nivo Charts para visualização gráfica dos dados</li>
    </ul>
  </li>
  <li><strong>Backend:</strong>
    <ul>
      <li>Node.js com Express</li>
      <li>MongoDB como banco de dados</li>
      <li>Aggregation Framework do MongoDB para consultas avançadas</li>
    </ul>
  </li>
  <li><strong>Containerização:</strong>
    <ul>
      <li>Docker para criar ambientes consistentes e escaláveis</li>
    </ul>
  </li>
</ul>

---

<h2>🚀 Como Rodar o Projeto</h2>

<h3>Pré-requisitos</h3>
<ul>
  <li>Docker e Docker Compose instalados na máquina</li>
  <li>Node.js instalado para rodar o frontend</li>
</ul>

---

<h2>🔥 Rodando o Backend</h2>
<p>O backend está containerizado usando Docker, então basta iniciar o container:</p>

<ol>
  <li><strong>Abra o terminal e navegue até a pasta do backend:(Está no repositorio do backend)</strong>
    <pre>
      <code>
        cd backend
      </code>
    </pre>
  </li>
  <li><strong>Inicie o container do Docker:</strong>
    <pre>
      <code>
        docker-compose up --build
      </code>
    </pre>
    <p>Esse comando irá:</p>
    <ul>
      <li>Construir a imagem Docker se for a primeira vez que está rodando.</li>
      <li>Iniciar o container com o backend configurado na porta <strong>3333</strong>.</li>
    </ul>
  </li>
  <li>O backend estará rodando em:
    <pre>
      <code>
        http://localhost:3333
      </code>
    </pre>
  </li>
</ol>

---

<h2>🔥 Rodando o Frontend</h2>
<p>O frontend foi feito com <strong>Vite</strong>, então o comando para rodar é um pouco diferente:</p>

<ol>
  <li><strong>Abra outro terminal e navegue até a pasta do frontend:</strong>
    <pre>
      <code>
        cd frontend
      </code>
    </pre>
  </li>
  <li><strong>Instale as dependências:</strong>
    <pre>
      <code>
        npm install
      </code>
    </pre>
  </li>
  <li><strong>Rode o frontend em modo de desenvolvimento:</strong>
    <pre>
      <code>
        npm run dev
      </code>
    </pre>
  </li>
  <li>O frontend estará disponível em:
    <pre>
      <code>
        http://localhost:5173
      </code>
    </pre>
  </li>
</ol>

---

<h2>🎉 Acessando a Aplicação</h2>
<p>Após iniciar o backend e o frontend:</p>
<ul>
  <li>Acesse o navegador em: <strong>http://localhost:5173</strong></li>
</ul>




