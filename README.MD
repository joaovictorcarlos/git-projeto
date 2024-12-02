## Exercicio: React Componets(joão victor e pedro leon)

**Objetivo da atividade**: continuar trabalhando com o react e adicionar um  novo componente chamado DishdetailComponent que vai exibir os detalhes de um prato selecionado. 

**Passo 1**: Criar novo arquivo chamado DishdetailComponent.js na pasta components para que os detalhes do prato sejam exibidos
 
Explicando um pouco do codigo nessa etapa: 

**DishdetailComponent.js**

- componente DishDetail que vai receber o prato selecionado como uma prop.
- Se o prato for nulo, retorna um div vazio.
- Caso contrário vai exibe os detalhes do prato e seus comentários em um layout usando classes do Bootstrap.

**MenuComponent.js**

- Importa o DishDetail e utiliza ele para exibir os detalhes do prato selecionado.
- Adiciona o método onDishSelect para atualizar o estado com o prato selecionado quando um prato for clicado.

**Passo 2**: adicionara o componente de cartão para exibir os detalhes do prato dado acima

explicando um pouco do codigo nessa etapa:

**DishdetailComponent.js**:a função renderDish recebe um prato como parâmetro e retorna o código JSX para exibir os detalhes do prato em um cartão estilizado com Reactstrap.

- A função renderDish verifica se o prato é nulo se for retorna um div vazio.
- se não retorna um Card do Reactstrap com a imagem, nome e descrição do prato.
- função renderDish para exibir os detalhes do prato selecionado.
- Exibe os comentários do prato ao lado dos detalhes, utilizando classes do Bootstrap para o layout.

**Passo 3**: exibir lista de comentarios do prato quando clicar

explicando um pouco do codigo nessa etapa:

**DishdetailComponent.js**:a função renderComments recebe a matriz de comentários como parâmetro e retorna o código JSX para exibir cada comentário.

- A função renderComments verifica se os comentários são nulos. Se forem, retorna um div vazio.
- se não retorna um div contendo um cabeçalho com a palavra "Comments" e uma lista de comentários.
- Cada comentário é exibido em duas linhas: a primeira linha mostra o comentário e a segunda linha mostra o nome do autor e a data que foi publicado.
- função renderDish é usada para exibir os detalhes do prato selecionado.
- função renderComments é usada para exibir os comentários do prato ao lado dos detalhes, utilizando classes do Bootstrap para o layout