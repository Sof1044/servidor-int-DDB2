const express = require('express')
const app = express()
const cors = require('cors')

const hostname = 'localhost'
const PORT = 3000
const conn = require('./db/conn')

// ------------- middleware ------------------
app.use(express.urlencoded({exteded: true}))
app.use(express.json())
app.use(cors())
// -------------------------------------------

// ---------- Rotas ---------------

app.get('/teste', (req,res)=>{
    res.status(200).json({mesage: "rota de teste da API"})
})

app.get('/nome', (req,res)=>{
    res.status(200).json({nome: "Moisés"})
})
app.get('/idade', (req,res)=>{
    res.status(200).json({idade: 15})
})
app.get('/altura', (req,res)=>{
    res.status(200).json({altura: 1.85})
})


app.get('/', (req,res)=>{
    res.status(200).json({message: 'Aplicação Server Rodando!'})
})
// ---------------- Server ------------------------
conn.sync()
    .then(()=>{
        app.listen(PORT, hostname, ()=>{
            console.log(`Servidor rodando em ${hostname}:${PORT}`)
        })
    })
    .catch((err)=>{
        console.error('Erro de conexão com o banco de dados',err)
    })