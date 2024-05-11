const firebaseConfig = {
    apiKey: "AIzaSyA-bfwAdBW2QOlmsY8XJNGMEXW2RoHe6E4",
    authDomain: "rs-doacoes-28f9a.firebaseapp.com",
    databaseURL: "https://rs-doacoes-28f9a-default-rtdb.firebaseio.com",
    projectId: "rs-doacoes-28f9a",
    storageBucket: "rs-doacoes-28f9a.appspot.com",
    messagingSenderId: "795298385267",
    appId: "1:795298385267:web:4ddf4e760b195031638906"
  };
  
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

function enviarFotoDaDoacao() {
   const nomeDoador = document.getElementById('nome').value;
   const email = document.getElementById('email').value;
   const telefone = document.getElementById('telefone').value;
   const tipo = document.getElementById('tipo').value;
   const quantidade = document.getElementById('quantidade').value;
   const imagem = document.getElementById('imagem').files[0];

   const dados = {
       nomeDoador: nomeDoador,
       email: email,
       telefone: telefone,
       tipo: tipo,
       quantidade: quantidade,
       imagem: imagem.name
   };

   database.ref('Doador').push(dados)
       .then(() => {
           alert('Dados enviados com sucesso!');
           
           document.getElementById('nome').value = '';
           document.getElementById('email').value = '';
           document.getElementById('telefone').value = '';
           document.getElementById('tipo').value = '';
           document.getElementById('quantidade').value = '';
           document.getElementById('imagem').value = '';
       })
       .catch((error) => {
           console.error('Erro ao enviar os dados: ', error);
       });
}