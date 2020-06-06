const util = require('../util/util');

destinos:[
    {
        "id":1,
        "nome":"Júpiter",
        "imagem":util.base64Encode('./api/server/data/images/jupiter.jpg'),
        "imagens":[],
        "tipo":"planeta",
        "nota":0,
        "descricao":"Júpiter é o maior planeta do sistema solar. Possui aproximadamente 143.000 quilômetros de largura no equador. Júpiter é tão grande que todos os outros planetas do sistema solar poderiam caber dentro dele. Mais de 1.300 Terras caberiam dentro de Júpiter. Júpiter é como uma estrela na composição. Se Júpiter tivesse sido cerca de 80 vezes mais massivo, teria se tornado uma estrela e não um planeta. Júpiter é o quinto planeta do sol. A distância média de Júpiter ao sol é de 5,2 unidades astronômicas, ou AU. Essa distância é um pouco mais do que cinco vezes a distância da Terra ao sol. Quando visto da Terra, Júpiter é geralmente o segundo planeta mais brilhante do céu noturno, depois de Vênus. O planeta recebeu o nome de Júpiter, o rei dos deuses romanos na mitologia.",
        "distanciaTerra":5.2,
        "periculosidade":9,
        "temETs":false,
        "comentarios":[
            {
                "idUsuario":1,
                "comentario":"perfeitoo"
            },
            {
                "idUsuario":2,
                "comentario":"ótimo"
            }
        ]
    }
]

module.exports = JSON.stringify(destinos);


