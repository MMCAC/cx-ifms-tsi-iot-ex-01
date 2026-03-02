const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, "public")));

// Landing page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// "Banco" em memória
let mensagens = []; // [{id, de, texto, ts}]
let nextId = 0;
const LIMITE = 50;

// Enviar mensagem
app.post("/mensagens", (req, res) => {
  const { de, texto } = req.body || {};

  if (!de || !texto) {
    return res.status(400).json({ error: "Campos obrigatórios: de, texto" });
  }

  const msg = {
    id: nextId++,
    de: String(de),
    texto: String(texto),
    ts: Date.now()
  };

  mensagens.push(msg);

  // Mantém só as últimas N mensagens
  if (mensagens.length > LIMITE) mensagens = mensagens.slice(-LIMITE);

  return res.sendStatus(200);
});

// Buscar mensagens novas (polling)
app.get("/mensagens", (req, res) => {
  const afterId = Number(req.query.afterId ?? -1);
  const novas = mensagens.filter(m => m.id > afterId);
  return res.status(200).json(novas);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Abrir: http://localhost:${PORT}/pessoa1.html e /pessoa2.html`);
});