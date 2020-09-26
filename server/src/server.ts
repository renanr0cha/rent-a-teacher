import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

// http://localhost:3333 <- Rota
// http://localhost:3333/contacts <- o nomezinho no final é o recurso

//principais métodos HTTP
//GET: Buscar ou listar uma informação
//POST: Criar alguma nova informação
//PUT: Atualizar uma informação existente
//DELETE: Deletar uma informação existente

//Corpo da requisição (Request Body): Dados para criação ou atualização de um registro.
//Route Params: Identificar qual recurso eu quero atualizar ou deletar
//Query Params: Principalmente em listagem, paginação, filtros, ordenação




app.listen(3333);
