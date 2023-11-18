var firebaseConfig = {
  apiKey: "AIzaSyAsbCDALVwPLtPP3v5nTyWpZLurIaZw8hA",
  authDomain: "projeto-conecta-8b60e.firebaseapp.com",
  projectId: "projeto-conecta-8b60e",
  storageBucket: "projeto-conecta-8b60e.appspot.com",
  messagingSenderId: "865509919529",
  appId: "1:865509919529:web:d5e12995f43e1841820538"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
var verdade = false;
function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  if( email.value == "isaquesamirbezerra@gmail.com"){
  document.getElementById('imgp').src ="imgIsaque.jpg";
  }

  promise.then((userCredential) => {
    var userEmail = userCredential.user.email;
    if (userEmail === "isaquesamirbezerra@gmail.com") {
      verdade = true;
      window.location.href = "desenvolvedor.html";
    } else if (userEmail == "exemplo1@dominio.com") {
      verdade = true;
      window.location.href = "epfhcredssj.html";
    } else if (userEmail === "exemplo2@dominio.com") {
      verdade = true;
      window.location.href = "orjoanp.html";
    }else if (userEmail === "exemplo3@dominio.com") {
      verdade = true;
      window.location.href = "spedpast.html";
    }else if (userEmail === "exemplo4@dominio.com") {
      verdade = true;
      window.location.href = "osjsbvasp.html";
    }else if (userEmail === "exemplo3@dominio.com") {
      verdade = true;
      window.location.href = "foi_terceiro.html";
    } else {
    }
  })
  .catch((error) => {
    alert("Exsite algum erro, talvés seja senha, WiFi, o e-mail errado.");
  });
}

firebase.auth().onAuthStateChanged((user) => {
  if (user && verdade) {
  } else {
  }
});

function voltar() {
  window.location.href = "equipe.html";
}

function signOut() {
  auth.signOut();
  alert("Desconectado com sucesso");
}
