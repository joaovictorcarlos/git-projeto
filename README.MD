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

oque cada um faz?

Navbar dark color="primary: muda todo o plano de fundoi para uma cor primaria no caso azul
div className="container": classname adiciona classe personalizada, container altera largura largura




Essa substituição ira resultar no seguinte resultado:

![imagen navbar](navbar.png)


## Componentes do react

**objetivo**: Adicionar componentes ao seu aplicativo React

Passos:
- baixar o arquivo imagens.zip e descompactalo
- criar uma pasta chamada assets na pasta public e mover a pasta imagens para ela
- criar uma pasta chamada components na pasta scr e criar o arquivo 'MenuComponent.js' e adicionar o codigo pedido


**Explicação do codigo**

"import React, { useState } from 'react';
import { Media } from 'reactstrap';"

- React: biblioteca para criar interfaces de usuário
- useState: função fornecida pelo React que permite uma variável de estado em um componente funcional(hook). 

"const Menu = () => {"

- Função 'Menu' é definida

""const [dishes] = useState([
  {
    id: 0,
    name: 'Uthappizza',
    image: 'assets/images/uthappizza.png',
    category: 'mains',
    label: 'Hot',
    price: '4.99',
    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza...',
  },""

- O hook useState é utilizado para criar o estado dishes, que contém a lista de objetos(os pratos) e cada bloco, como o mostrado acima, vai ter uma variação das descrições do prato
- id: Identificador do prato
  name: nome do prato
  image: caminho para a imagem do prato.
  category: Categoria do prato (prato principal, aperitivo, sobremesa).
  label: adicional ("Hot", "New").
  price: Preço do prato.
  description: Descrição do prato


"const menu = dishes.map((dish) => {
  return (
    div key={dish.id} className="col-12 mt-5">
      Media tag="li">
        Media left middle>
          Media object src={dish.image} alt={dish.name} />
        /Media>
        Media body className="ml-5">
          Media heading>{dish.name}/Media>
          p>{dish.description}/p>
        /Media>
      /Media>
    /div>
  );
});"

- dishes.map(): usado para percorrer cada prato.
- Media: organiza a imagem e a descrição do prato:
  Media left middle: coloca a imagem à esquerda e centralizada verticalmente.
  Media body: Contém o corpo do conteúdo.


"return (
  div className="container">
    div className="row">
      Media list>
        {menu}
      /Media>
    /div>
  /div>
);"

- container: Um wrapper de layout do Bootstrap que centraliza e dá margem ao conteúdo.
  row: Define uma linha para organizar as colunas.
  Media list: Utilizado para agrupar os itens de lista de maneira organizada

"export default Menu;"
- exportado para ser utilizado em outros lugares.