//carrega o express e handlebars
const express = require('express');
const exphbs = require('express-handlebars');

//cria o app
const app = express();

//configura handlebars
app.engine(
    'handlebars',
    exphbs.engine({defaultLayout:false})
);

app.set(
    'view engine',
    'handlebars'
);

//receber dados do form
app.use(
    express.urlencoded({extended:true})
);

let jogos = [
    {
        id:1,
        nome:"Minecraft",
        genero:"Sandbox",
        plataforma:"PC",
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDENH_Mtr_NstTjH9agL6Qo8sv2W4kXJyNQ&s"
    },

    {
        id:2,
        nome:"Roblox",
        genero:"Aventura",
        plataforma:"Mobile",
        imagem:"https://photos5.appleinsider.com/gallery/40883-79111-B3840B94-33C9-4304-96D9-2BEBF83ECBAD-xl.jpg"
    }
];

//listar jogos
app.get(
    '/',
    (req,res) => res.render('listarjogos',{jogos})
);

//abrir tela cadastrar
app.get(
    '/jogos/cadastrar',
    (req,res) => res.render('cadastrarjogo')
);

//cadastrar jogo
app.post(
    '/jogos',
    (req,res) => {

        let jogo = {};

        jogo.id = jogos.length + 1;
        jogo.nome = req.body.nome;
        jogo.genero = req.body.genero;
        jogo.plataforma = req.body.plataforma;
        jogo.imagem = req.body.imagem;

        jogos.push(jogo);

        res.redirect('/');
    }
);

app.listen(
    3000,
    () => console.log('Servidor funcionando')
);