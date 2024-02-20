<h1 align="center"> Avaliação do módulo de Métodos Ágeis e Boas Práticas - ADA </h1>

Projeto de avaliação do módulo de Métodos Ágeis e Boas Práticas do curso da ADA.
O projeto do "AdaFood" é um aplicativo de delivery onde nele é possível cadastrar um usuário e realizar um pedido. A ideia é consolidar o conhecimento sobre microsserviços.

## ⏳ Status do Projeto

![](https://img.shields.io/static/v1?label=Status&message=Em%20Desenvolvimento&color=informational)

## Tecnologias ulizadas

### Dependências

-   **axios**  
    `npm i axios`

-   **dotenv**  
    `npm i express dotenv`

-   **nodemon**  
    `npm i nodemon`

-   **yup**  
    `npm i yup`

-   **json web token**  
    `npm i jsonwebtoken`

## Endpoints

### Api Gateway

```
POST /register - Redireciona para o microsserviço responsável por criar um usuário.
```

```
POST /session - Redireciona para o microsserviço responsável por fazer o login do usuário.
```

```
POST /auth - Verifica se um usuário está autenticado.
```

```
POST /order - Redireciona para o microsserviço responsável por adicionar criar um pedido.
```

```
POST /address -  Redireciona para o microsserviço responsável por adicionar o endereço do usuário.
```

### Register Service

```
POST /register - Cria um novo usuário.
```

### Auth Service

```
POST /session - Cria uma sessão do usuário.
```

```
POST /auth - Verifica a autenticação do usuário.
```

### Address Service

```
POST /address -  Adicionar o endereço do usuário.
```

### Order Service

```
POST /order -  Cria um pedido.
```

## Banco de Dados

O projeto utiliza o MongoDB, portanto, é necessário configurar o banco no arquivo `.env`.

## ✍🏻 Autores

<div style="text-align: center;">
<img src="https://media.licdn.com/dms/image/D4D03AQETcbtxqTSLKw/profile-displayphoto-shrink_800_800/0/1699883993286?e=1712793600&v=beta&t=rzH1E3ulWmNx0kNg3giLIG_LZyDP_79YU5Kdtj_EfpE" style="width:100px; border-radius: 50%;}">

**Aline Pinhelli**

[![Portólio](https://img.shields.io/badge/meu_portfólio-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AlinePinhelli)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aline-dos-santos-pinhelli-844079160/)

</div>

<div style="text-align: center;">
<img src="https://media.licdn.com/dms/image/C4D03AQFMjH7QKClDvQ/profile-displayphoto-shrink_800_800/0/1620776895226?e=1713398400&v=beta&t=DAEesx0irZHF7Xms3mof8p7xcaLcBVk4faBrN4hOjz4" style="width:100px; border-radius: 50%;}">

**Raquel Jacques**

[![Portólio](https://img.shields.io/badge/meu_portfólio-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/raqueljacques)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/raqueljacques/)

</div>

<div style="text-align: center;">
<img src="https://media.licdn.com/dms/image/C4E03AQEeLRqVNwT0Iw/profile-displayphoto-shrink_800_800/0/1668017854186?e=1712793600&v=beta&t=1P6cjR-D4unA-2qPlRP5ffAVESjwUbFRa5h8MGDNbY4" style="width:100px; border-radius: 50%;}">

**Bruna Mata**

[![Portólio](https://img.shields.io/badge/meu_portfólio-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/bruna-mata)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/brunamata/)

</div>

<div style="text-align: center;">
<img src="https://avatars.githubusercontent.com/u/71932071?s=400&u=48f8b34e7e3922678597f38bb3ed7d71229299cf&v=4" style="width:100px; border-radius: 50%;}">

**Caroline Melo**

[![Portólio](https://img.shields.io/badge/meu_portfólio-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/CarolineMelo)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/caroline-melo-5b1b231b4/)

</div>

<div style="text-align: center;">
<img src="https://media.licdn.com/dms/image/C4E03AQEu59A9ujf38w/profile-displayphoto-shrink_800_800/0/1635882045841?e=1712793600&v=beta&t=wfbbUlMlSi9mw-0maUKPr9Fi7WPChdLIzUoYGD5QGlk" style="width:100px; border-radius: 50%;}">

**Carmen Mattos**

[![Portólio](https://img.shields.io/badge/meu_portfólio-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/carmencmattos)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/carmencmattos/)

</div>

<div style="text-align: center;">
<img src="https://avatars.githubusercontent.com/u/123129229?v=4" style="width:100px; border-radius: 50%;}">

**Ysabella Cristina**

[![Portólio](https://img.shields.io/badge/meu_portfólio-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ysabeellaa)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ysabella-cristina/)

</div>

## ©️ Licença

Este projeto é licenciado sob a licença [MIT](https://choosealicense.com/licenses/mit/). Consulte o arquivo LICENSE para obter mais informações.

## 🙏🏻 Agradecimentos

Gostaríamos de expressar nossa gratidão ao Professor Esdras!
