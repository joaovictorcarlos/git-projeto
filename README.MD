## DOCUMENTAÇÃO REACT

**Objetivo**: Primeiros passoas para ciar um React e instalar o create-react-app

Passo 1: Instalando o create-react-app
- digitar o comando npm install -g create-react-app

Passo 2: criar um pasta chamda React e digitar o comando
- npx create-react-app confusion
- isso criara uma pasta chamada confusion

passo 3: va ate essa pasta e digite
- npm start
- Isso compilará o projeto e, em seguida, abrirá uma guia em seu navegador padrão no endereço.

passo 4:inicializar o projeto como git
- git init
  git add 
  git commit -m "Initial Setup"


passo 5: eviar para github

## Adicionando reactstrap

Passo 1: cofigurando para usar o reactstrap utilisando os seguintes comandos para instalar o reactstrap e o Booststrap

-npm install reactstrap react react-dom
 npm install --save bootstrap
 npm install react-popper @popperjs/core

Passo 2: abrir o arquivo index.js na pasta src e adicionar a seguinte linha aos imports

-import 'bootstrap/dist/css/bootstrap.min.css';

Passo 3: abrir o arquivo App.js na pasta src e apagar tudo entre "div className="App" e "/div" e substituir por:

""Navbar dark color="primary"
 div className="container"
 NavbarBrand href="/">Ristorante Con Fusion /NavbarBrand
 div Aluno: Fulano de Tal</div>
 /div>
 /Navbar""

Essa substituição ira resultar no seguinte resultado:

![imagen navbar]("confusion\public\navbar.png")