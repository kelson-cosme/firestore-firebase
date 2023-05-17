import './App.css';
import { } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDu9roM1q92Rfvu87eoa-Qnes_6EuajPVc",
  authDomain: "colegio-e6fc3.firebaseapp.com",
  projectId: "colegio-e6fc3",
  storageBucket: "colegio-e6fc3.appspot.com",
};

function App() {

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getAlunos(db) {
  const alunos = collection(db, 'turmaA');
  const alunosSnapshot = await getDocs(alunos);
  const alunoLista = alunosSnapshot.docs.map(doc => doc.data());
    alunoLista.forEach((doc) => { //ler os dados de todas coleção
      console.log(doc.nome)
    })
}
getAlunos(db)

  return (
    <div>
      teste
    </div>
  );
}

export default App;
