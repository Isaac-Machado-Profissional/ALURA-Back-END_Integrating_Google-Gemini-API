import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
     },
    filename: function (req, file, cb) {
         cb(null, file.originalname);
}
})

const upload = multer({ dest: "./uploads" , storage})


const routes = (app) => {
    // Habilita o parser JSON para lidar com requisições com corpo em formato JSON.
    app.use(express.json());
    app.use(cors(corsOptions))

    // Rota para obter todos os posts.
    app.get("/posts", listarPosts);

    // Rota para criar um novo
    app.post("/posts", postarNovoPost)

    // Rota para fazer upload de imagem e chamando a função controladora para processamento de uploadImagem
    app.post("/upload", upload.single("imagem"), uploadImagem)

    app.put("/upload/:id", atualizarNovoPost)
}

export default routes;