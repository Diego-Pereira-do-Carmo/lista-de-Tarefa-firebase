const firebaseConfig = {
  apiKey: "AIzaSyCZO3D0tKV7B5Iux7hwNX2hCnCMfiXgSpk",
  authDomain: "lista-de-tarefas-3046.firebaseapp.com",
  projectId: "lista-de-tarefas-3046",
  storageBucket: "lista-de-tarefas-3046.appspot.com",
  messagingSenderId: "342974599177",
  appId: "1:342974599177:web:82ea227ed0e2568391e8d8",
  measurementId: "G-59YHH9MGG9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

function criaUsuario(novoEmail, novaSenha) {
  auth.createUserWithEmailAndPassword(novoEmail, novaSenha)
    .then(user => {
      confirmacaoDeCadastro(user)
    }).catch(error => {
      let mensagem = error.message;
      erroEmRegistrar(mensagem);
    })
}

function login(usuarioEmail, usuarioSenha) {
  auth.signInWithEmailAndPassword(usuarioEmail, usuarioSenha)
  .then(() =>{
    location = './main.html';
  }).catch(error=>{
    let mensagem = error.message;
    erroLogin(mensagem);
  })
}