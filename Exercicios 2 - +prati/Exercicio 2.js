/*
- Verificando Propriedades
Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. 
Verifique se a propriedade editora existe no objeto usando for in.
Se não existir, adicione essa propriedade ao objeto.
*/

const livro = {
    titulo: "É Assim que acaba",
    autor: "Colleen Hoover",
    anoPublicacao: 2016,
    genero: "Romance",
  };
  
  const propiedadeBuscada = "editora";
  let propriedadeExiste = false;
  
  for (let key in livro) {
    if (key === propiedadeBuscada) {
      propriedadeExiste = true;
      break; //Após encontrar a propriedade o laço para e sai do loop
    }
  }
  
  //Se o loop anterior não encontrar a propriedade o if é executado, como está negando(mudando de false para true) o conteúdo do if será executado
  if (!propriedadeExiste){
      livro.editora = "Estação da Fé";
  }
  console.log(livro)