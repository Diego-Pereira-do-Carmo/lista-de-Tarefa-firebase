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
// console.log(auth.currentUser.uid)
const btnLogout = document.getElementById("btnLogout");

btnLogout.addEventListener('click', () => {
  auth.signOut().then(() => {
    window.location = './index.html';
  }).catch(error => {
    console.log(error)
  })
})

function pegarTarefas() {
  const usuario = auth.currentUser.uid;
  db.collection("tarefas").where("userId", "==", usuario).get()
    .then((snapshot => {
      let dados = snapshot.docs;
      mostrarTabela(dados);
    })).catch((error => {
      console.log(error)
    }))
}


function adicionarTarefa() {
  let tarefa = pegarCampos();
  db.collection("tarefas").add(tarefa)
    .then(() => {
      location.reload();
    }).catch(error => {
      console.log(error);
    })
}

function excluirTarefa(event) {
  const id = event.target.getAttribute('data-id');
  db.collection("tarefas").doc(id).delete()
    .then(() => {
      location.reload();
    })
    .catch((error) => {
      console.error('Erro ao excluir tarefa: ', error);
    });
}