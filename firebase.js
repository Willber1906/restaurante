const { initializeApp }= require ("firebase/app");
const { getAuth }= require ("firebase/auth");

const firebaseConfig = {
    apiKey: "AIzaSyC11K7qbeyeWCs13eKdzb96Eyvxe2Tr3CA",
    authDomain: "restaurante-3c3f7.firebaseapp.com",
    projectId: "restaurante-3c3f7",
    storageBucket: "restaurante-3c3f7.firebasestorage.app",
    messagingSenderId: "477950787545",
    appId: "1:477950787545:web:863c8763079cb72b9ea3c8",
    measurementId: "G-H69BHD8MQ0"
  };

  const app = initializeApp(firebaseConfig);

   const auth = getAuth(app);

   module.exports = { auth };