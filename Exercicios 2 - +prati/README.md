# Exercicios-2--MAIS-PRA-TI

### Como executar os exercícios:

## 1. Acessando propriedades de objetos 
- Explicação Pacote prompt-sync: Esse pacote permite receber entradas do usuário diretamente no terminal. Para cada propriedade do objeto carro, ele solicita que o usuário digite o valor. Uso do for...in: Itera sobre as propriedades do objeto carro e exibe no terminal os valores inseridos.
- Executar o Código.
- Execute o código com o comando: bash

## 2. Verificando objetos
- Crie um objeto livro com propriedades titulo, autor,
anoPublicação e genero. Verifique se não existe propriedade editora, objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

Objeto livro: Criado com as propriedades título, autor, anoPublicacao, e genero.

Verificação da Propriedade Editora: O loop for...in percorre as propriedades do objeto livro. Se a propriedade editora for encontrada, a variável editoraExiste é definida como true.

Adição de Propriedade: Se editoraExiste for false (ou seja, a propriedade não está presente no objeto), a propriedade editora é adicionada ao objeto com o valor "HarperCollins".

Exibição do Objeto Atualizado: O objeto livro é exibido no console, já com a propriedade editora incluída, caso não estivesse presente.

## 3. Filtrando propriedades de objetos
- Dado um objeto produto com várias propriedades, crie uma

- Função que retorna um novo objeto contendo apenas as propriedades cujo nome

- Valor seja maior que um valor específico. Use para in para filtrar como propriedades.

## 4.Iterando sobre matrizes de objetos

- Crie um array de objetos pessoas, onde cada objeto representa

- Uma pessoa com nome, idade, e cidade. Use for para exibir como informações de cada pessoa no console.

Array pessoas: É um array de objetos, onde cada objeto contém três propriedades: nome, idade, e cidade.
Iteração com for...de:
O loop for...of é usado para iterar sobre cada objeto no array pessoas.
Para cada iteração, ele acessa as propriedades de cada pessoa (nome, idade, cidade) e exibe essas informações no console.

## 5. Calculando valores em arrays de objetos

- Criar um conjunto de objetos escolares, cada um com propriedades

- Nome, nota1, e nota2. Use for para calcular a média das notas de cada

- Aluno e exibir o nome do aluno junto com sua mídia.

Passos para o código:

Criação de um array de objetos para os alunos - Cada aluno terá as propriedades nome, nota1, e nota2.

Uso do loop for...of - Para iterar sobre o array de objetos e calcular a média das notas de cada aluno.

Cálculo da média - Usaremos a fórmula (nota1 + nota2) / 2 para calcular a média de cada aluno.

Exibição dos resultados - Exibir o nome do aluno junto com sua mídia.

Instruções de Execução:

Clonar ou repositório:

Execute o código com o comando: bash

## 6. Filtrando Arrays de Objetos
- Crie um array de objetos operacionais, onde cada objeto
- Contém informações como nome, carga, e salário. Uso para de para filtrar e exigir apenas os funcionários cujo salário seja maior que um valor específico.
Explicação:
- Criação de uma matriz de objetos para os funcionários - Cada funcionário terá as propriedades nome, carga e salário.
- Uso do loop for...of - Para iterar sobre o array de objetos e aplicar a condição de filtragem.
- Filtragem - Vamos exibir os funcionários cujo salário seja maior que um valor pré-determinado
Instruções de Execução:
Clonar ou repositório:
Execute o código com o comando:bash

## 7. Modificando Objetos em um Array

- Crie uma matriz de objetos produtos, onde cada objeto tem nome, preço, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.
Explicação:
- Criação de uma matriz de objetos para os produtos - Cada produto terá as propriedades nome, preço, e desconto.
- Uso do método forEach - Para iterar sobre o array e aplicar o desconto.
- Cálculo do novo preço - Subtrair 10% do preço original de cada produto.
- Exibição dos novos preços - Exibir o nome do produto junto com o novo preço após o desconto.
Instruções de Execução:
Clonar ou repositório:
Execute o código com o comando: bash

## 8. Criando Novos Arrays para Partir de Objetos
- Crie um array de objetos filmes, onde cada filme tem título, diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes.

Explicação:

Vamos criar um exercício em JavaScript onde manipularemos um array de objetos que contém informações sobre filmes. O objetivo dos filmes é extrair apenas os títulos dos filmes e armazená-los em um novo array utilizando o método forEach.

Passos para o código:

Criação de uma matriz de objetos para os filmes - Cada filme terá as propriedades título, diretor e anoLancamento.

Uso do método forEach - Para iterar sobre o array e extrair os títulos dos filmes.

Armazenar os títulos em um novo array - Durante a iteração, vamos criar um novo array apenas com os títulos.

## 9. Contabilizando Elementos com uma Condição

- Crie um conjunto de objetos clientes, cada um com propriedades

- Nome, idade, e cidade. Use forEach para contar quantos clientes têm mais

-30 anos.

Explicação:

-Criação de uma matriz de objetos para os clientes - Cada cliente terá as propriedades nome, idade, e cidade.

- Uso do método forEach - Para iterar sobre o array e verificar a condição de idade.
- Contabilizar clientes com mais de 30 anos - Vamos manter um contador que será incrementado sempre que a condição estiver satisfeita.

## 10. Criando Relatórios com Objetos e Arrays
- Crie uma matriz de objetos de vendas, onde cada objeto tem produto, quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos.

Explicação:

Criação de uma matriz de objetos para vendas - Cada venda terá as propriedades do produto, quantidade e valor.

Uso do método forEach - Para iterar sobre o array e calcular o valor total das vendas.

Cálculo do valor total - Multiplicaremos a quantidade de cada produto pelo valor e somaremos ao total geral.

## 11. Agrupando Elementos com forEach
- Crie uma matriz de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupe a quantidade total de produtos por cliente.
- Passos para o código:
- Criação de uma matriz de objetos para os pedidos - Cada pedido terá as propriedades do cliente, produto, e quantidade. Uso do método forEach - Para iterar sobre a matriz de pedidos e agrupar a quantidade total de produtos por cliente.
- Criação de um objeto para armazenar os detalhes - Durante a iteração, vamos verificar se o cliente já não existe nenhum objeto e atualizar sua quantidade total.
Explicação do código:
totalPorCliente é o objeto que vai armazenar quantidades totais de produtos por cliente.
No loop forEach, verificamos se o cliente já tem uma entrada no objeto totalPorCliente. Se já tivermos, somamos a quantidade atual. Se não, criamos uma nova entrada com a quantidade inicial.

## 12. Atualizando um Array de Objetos

- Crie um conjunto de objetos em estoque, onde cada objeto tem produto, quantidade e mínimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando seus detalhes.

Passos para o código:

- Criação de uma matriz de objetos para o estoque - Cada produto terá as propriedades do produto, quantidade e mínimo.

- Uso do método forEach - Para iterar sobre a matriz de produtos e verificar se a quantidade está abaixo do mínimo.

- Atualizar a quantidade dos produtos - Se a quantidade for menor que o mínimo, duplicamos a quantidade.

Explicação do código:

- estoque é o conjunto de objetos que representa os produtos, suas necessidades atuais e o mínimo necessário.

- O método forEach percorre cada item no array e verifica se a quantidade é menor que o mínimo.Duplica a quantidade de produtos abaixo do mínimo.

- O código também exibe uma mensagem indicando a atualização da quantidade de cada produto que foi alterado.

## 13. Implementando um Carrinho de Compras

- Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro dos itens deve representar um produto no carrinho, com nome, quantidade e preço unitário. Use forEach para calcular o valor total do carrinho.

Explicação do código:

- Carrinho é um objeto que contém itens de propriedade, que é um array de objetos. Cada objeto dentro dos itens representa um produto no carrinho, com suas respectivas propriedades nome, quantidade e preço unitário.

- O método forEach percorre cada item no array itens e calcula o valor total do carrinho, somando o valor de cada item (quantidade * precoUnitario) à variável valorTotal.

- Ao final, o valor total do carrinho é exibido no console.

## 14.  Encontrando o Maior Valor em um Array de Objetos
- Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionários. Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.

- Criamos e manipulamos um objeto empresa com uma propriedade departamentos, e usamos for...in e for...of para iterar sobre os departamentos e seus funcionários.

-Manipulando Objetos Complexos

Objetivo: Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionários. Use for...in e for...of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.

Passos para o código:

Criação do objeto empresa: O objeto empresa terá uma propriedade departamentos, que é uma matriz de objetos. Cada objeto dentro de departamentos representará um departamento, com um nome de propriedade e uma lista de funcionários.
Uso dos métodos for...in e for...of:** Itere sobre os departamentos e seus funcionários para exibir as informações desejadas.
Explicação do código:

empresa é um objeto que contém uma propriedade departamentos, que é uma matriz de objetos. Cada objeto dentro de departamentos representa um departamento com um nome de propriedade e uma lista de funcionários.

O loop for...in é usado para iterar sobre os índices do array departamentos. Em cada iteração, obtemos um departamento e exibimos seu nome.

Dentro do loop for...in, usamos um loop for...of para iterar sobre os funcionários do departamento atual. Exibimos o nome e a carga de cada funcionário.

## 15. Filtrando e Somando Valores

-  Crie um array de objetos transacionados, onde cada transação tem tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.

Explicação do Código:

Criação do Array de Transações: O array de transações conterá objetos com propriedades de tipo e valor.

Uso do Método forEach: Itere sobre o array de transações para calcular o saldo final, somando os valores das transações do tipo entrada e subtraindo os valores das transações do tipo saída.

Explicação do Código:

transações é uma matriz de objetos, onde cada objeto representa uma transação com propriedades de tipo (entrada ou saída) e valor.

A variável saldoFinal é inicializada com 0. Essa variável será usada para armazenar o saldo total após o soma das entradas e a subtração das saídas.

O método forEach examina cada transação no array. Para cada transação, verifique-se o tipo e, se for entrada, adicione o valor ao saldoFinal. Se for saída, subtrai o valor do saldoFinal.

Após a iteração, o saldo final é exibido no console.
