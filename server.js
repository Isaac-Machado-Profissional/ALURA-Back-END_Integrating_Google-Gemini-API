import express from "express"; // Importa o framework Express para criar a aplicação web.
import routes from "./src/routes/postsRoutes.js";

const app = express(); // Cria uma nova instância do aplicativo Express.

app.use(express.static("uploads"))
routes(app)

// Inicia o servidor na porta 3000 e mostra uma mensagem no console.
app.listen(3000, () => {
    console.log("Servidor escutando..."); 
});





