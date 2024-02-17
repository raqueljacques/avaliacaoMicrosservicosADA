const { Router } = require("express");
const SessionController = require("./controllers/session-ctrl");

const routes = new Router();

routes.post("/session", SessionController.create);

// Rota para criação de sessão
routes.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ email, password });

    if (!usuario) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }
    // Lógica para gerar e retornar o token de sessão
    const token = gerarToken(usuario); // Implementar a função "gerarToken"
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
});

// Rota para verificar sessão
routes.get("/verify", (req, res) => {
  // Lógica para verificar se o token de sessão é válido
  const token = req.headers["authorization"]; // Obter o token da requisição
  if (!token) {
    return res.status(401).json({ message: "Token de sessão não informado" });
  }
  const valid = verificarToken(token); // Implementar a função "verificarToken"
  if (!valid) {
    return res.status(401).json({ message: "Token de sessão inválido" });
  }
  res.json({ valid: true });
});

module.exports = routes;
