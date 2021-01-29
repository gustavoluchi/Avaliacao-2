// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mock from './mock.json';

export default async (req, res) => {
  // setTimeout(() => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.send(mock)
  // }, 500)

}

/* Considerar que os seguintes endpoints estão disponíveis (docker run -p 3002:3002 gcpasquadproduto/softplan-desafio-frontend)
$ curl -i -X POST http://localhost:3002/processo \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        -d '{"descricao" : "Solicitação de licença-prêmio", "assunto" : "Licença", "interessados" : ["Edmilson Cherem"]}'

HTTP/1.1 201
Location: http://localhost:3002/processo/04c7197f-c0fe-4dab-b27c-d69611eca40f
Content-Length: 0
Date: Tue, 07 Aug 2018 20:26:22 GMT

___
$ curl -i -X GET http://localhost:3002/processo/04c7197f-c0fe-4dab-b27c-d69611eca40f

HTTP/1.1 200
Content-Type: application/json;charset=UTF-8
Transfer-Encoding: chunked
Date: Tue, 07 Aug 2018 20:32:59 GMT
{
    "id": "04c7197f-c0fe-4dab-b27c-d69611eca40f",
    "numero": "SOFT 2018/00008",
    "entrada": "07/08/2018",
    "descricao": "Solicitação de licença-prêmio",
    "assunto" : "Licença",
    "interessados": ["Edmilson Cherem"]
}

___
curl -i -X GET http://localhost:3002/processo?q=licenca \
  -H 'accept: application/json' \
  -H 'content-type: application/json'

HTTP/1.1 200
Content-Type: application/json;charset=UTF-8
Transfer-Encoding: chunked
Date: Tue, 07 Aug 2018 20:29:43 GMT
[
    {
        "id": "04c7197f-c0fe-4dab-b27c-d69611eca40f",
        "numero": "SOFT 2018/00008",
        "entrada": "07/08/2018",
        "descricao": "Solicitação de licença-prêmio",
        "assunto" : "Licença",
      "interessados": ["Edmilson Cherem"]
    }
]

___
$ curl -i -X DELETE http://localhost:3002/processo/04c7197f-c0fe-4dab-b27c-d69611eca40f

HTTP/1.1 200
Content-Type: application/json;charset=UTF-8
Transfer-Encoding: chunked
Date: Tue, 07 Aug 2018 20:32:59 GMT
{
    "id": "04c7197f-c0fe-4dab-b27c-d69611eca40f",
    "numero": "SOFT 2018/00008",
    "entrada": "07/08/2018",
    "descricao": "Solicitação de licença-prêmio",
    "assunto" : "Licença",
    "interessados": ["Edmilson Cherem"]
} */