# 📡 cx-ifms-tsi-iot-ex-01

Projeto desenvolvido para a disciplina de **Internet das Coisas (IoT)**
do curso de Tecnologia em Sistemas para Internet -- IFMS.

------------------------------------------------------------------------

## 📌 Descrição

Este projeto implementa um **chat simples com duas páginas
independentes**, utilizando:

-   Node.js\
-   Express\
-   HTML\
-   JavaScript (Fetch API)\
-   AJAX Polling

Cada página representa um "dispositivo" diferente, simulando comunicação
entre dois nós através de requisições HTTP.

O sistema utiliza o conceito de **polling periódico**, semelhante ao
modelo de coleta de dados em aplicações IoT.

------------------------------------------------------------------------

## 🧠 Conceito aplicado (IoT)

O funcionamento segue a mesma lógica de aplicações IoT:

-   Dispositivo envia dados → `POST`
-   Cliente consulta novos dados periodicamente → `GET`

No lugar de temperatura ou sensores físicos, os dados trafegados são
mensagens de chat.

Isso simula:

-   Telemetria simples\
-   Comunicação cliente-servidor\
-   Atualização periódica de estado

------------------------------------------------------------------------

## 🗂 Estrutura do Projeto

    cx-ifms-tsi-iot-ex-01/
    │
    ├── package.json
    ├── server.js
    │
    └── public/
        ├── index.html
        ├── pessoa1.html
        └── pessoa2.html

------------------------------------------------------------------------

## 🚀 Como executar

### 1️⃣ Instalar dependências

``` bash
npm install
```

### 2️⃣ Iniciar o servidor

``` bash
node server.js
```

ou

``` bash
npm start
```

### 3️⃣ Abrir no navegador

    http://localhost:3000/pessoa1.html
    http://localhost:3000/pessoa2.html

Abra em duas abas ou dois navegadores diferentes.

------------------------------------------------------------------------

## 🔁 Funcionamento das Rotas

### Enviar mensagem

**POST** `/mensagens`

Exemplo de body:

``` json
{
  "de": "Pessoa 1",
  "texto": "Olá"
}
```

------------------------------------------------------------------------

### Buscar novas mensagens

**GET** `/mensagens?afterId=ID`

Retorna apenas mensagens com `id` maior que o informado.

------------------------------------------------------------------------

## 🛠 Tecnologias Utilizadas

-   Node.js
-   Express
-   JavaScript (Fetch API)
-   HTML5

------------------------------------------------------------------------

## 📚 Objetivo Acadêmico

-   Aplicar conceitos de comunicação HTTP
-   Simular fluxo de dados em IoT
-   Trabalhar com requisições assíncronas
-   Entender o funcionamento de polling como estratégia de sincronização

------------------------------------------------------------------------

## ⚠️ Observações

-   As mensagens são armazenadas apenas em memória.
-   Ao reiniciar o servidor, os dados são perdidos.
-   Projeto com finalidade didática.

------------------------------------------------------------------------

## 👨‍💻 Autor

Maicon\
Tecnologia em Sistemas para Internet -- IFMS
