import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js"; // Importa a função para conectar ao banco de dados.

// Conecta ao banco de dados usando a string de conexão do ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO) 


// Função assíncrona para obter todos os posts do banco de dados.
export async function getTodosPosts() { 
    const db = conexao.db("imersao-back"); // Seleciona o banco de dados "imersao-back".
    const colecao = db.collection("posts"); // Seleciona a coleção "posts" dentro do banco de dados.
    return colecao.find().toArray(); // Retorna todos os documentos da coleção como um array.
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-back"); // Seleciona o banco de dados "imersao-back".
    const colecao = db.collection("posts"); // Seleciona a coleção "posts" dentro do banco de dados.
    return colecao.insertOne(novoPost)
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-back"); // Seleciona o banco de dados "imersao-back".
    const colecao = db.collection("posts") // Seleciona a coleção "posts" dentro do banco de dados.
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost})
}

