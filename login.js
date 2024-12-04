const { auth } = require ("./firebase");
const { signInWithEmailAndPassword } = require ("firebase/auth");

 const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
     console.log("Login efetuado com sucesso!");
    } catch (error) {
      console.error("Erro ao efetuar login:", error);
    }
}

module.exports = { login };