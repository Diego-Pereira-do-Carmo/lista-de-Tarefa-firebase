const formCadastro = document.getElementById("formCadastro");
const formLogin = document.getElementById("formLogin");
const emailInputCadastro = document.getElementById("floatingInput");
const senhaInputCadastro = document.getElementById("floatingPassword");

formCadastro.addEventListener('submit', function (event) {
  event.preventDefault();
  validarSenhaCadastro()
});

formLogin.addEventListener('submit', function (event) {
  event.preventDefault();
  const emailInputLogin = document.getElementById("emailInputLogin");
  const senhaInputLogin = document.getElementById("senhaInputLogin");

  login(emailInputLogin.value, senhaInputLogin.value)
});

function validarSenhaCadastro() {
  
  const confimarSenha = document.getElementById("confirmarSenha");
  const InfoRegistrar = document.getElementById("InfoRegistrar");

  if (senhaInputCadastro.value !== confimarSenha.value
    || senhaInputCadastro.value === '') {
    let p = document.createElement("p");
    
    InfoRegistrar.innerHTML = '';
    p.textContent = "Senha Invalida";
    p.style.color = "red";
    InfoRegistrar.appendChild(p);

    senhaInputCadastro.focus();
    return
  }
  criaUsuario(emailInputCadastro.value, senhaInputCadastro.value);
}

function erroEmRegistrar(mensagem){
  let InfoRegistrar = document.getElementById("InfoRegistrar");
  
  InfoRegistrar.textContent = mensagem;
  InfoRegistrar.style.color = "red";
}

function erroLogin(mensagem){
  let infoLogin = document.getElementById("infoLogin");
  
  infoLogin.textContent = mensagem;
  infoLogin.style.color = "red";
}

function  confirmacaoDeCadastro(){
  const containerLogin = document.getElementById("containerLogin");
  containerLogin.scrollIntoView({
    behavior: 'smooth'
  })
}