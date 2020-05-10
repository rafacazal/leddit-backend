# <div align="center"> Leddit </div>


## Stack
Esse é um projeto de Backend feito utilizando NodeJS, Express, Typescript e Firebase. Além disso, ele segue uma arquitetura em camadas simples:
1. Presentation: responsável pela comunicação com agentes externos (como o Frontend);
1. Data: responsável pela comunicação direta com o banco de dados;
1. Business: responsável pela lógica de negócio;
Por fim, ressalta-se que a comunicação da camada `Data` e a `Business` é feita através de interfaces denominadas `Gateway`, para possibilitar os testes unitários desta última camada (inversão de dependências)

## Sobre
Esse foi um projeto de Backend que utilizei para treinar os casos básicos de CRUD de uma API: Create, Read, Update e Delete.
Para isso, me inspirei na rede social <a target="_blank" href="https://reddit.com/"> Reddit</a> contendo funcionalidades semelhantes ao site como: cadastro, login, trocar senha,  criar e votar em posts, criar e votar em comentários. O que mais aprendi com esse desafio foi fazer a computação de votos e como atualizar o valor dos votos (tanto no post como no comentário). Nessa parte ainda está pendente a "direção" do voto, ou seja, se ele é positivo ou negativo. Em caso positivo, adcionar um voto e em caso negativo anular um voto.   

> status: 80% concluído 

## Deploy
#### > https://us-central1-leddit-4be86.cloudfunctions.net/app

## Como contribuir:
- Faça um fork desse repositório;
- Crie uma branch: `git checkout -b minha-branch`;
- Faça um commit com suas alterações: `git commit -m " Minha minhas contribuições"`;
- Faça push para a sua branch:`git push origin minha-branch` e depois confirme a abertura do PR.
