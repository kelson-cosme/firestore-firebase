import './App.css';
import { } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import React, {useState, useEffect, useLayoutEffect} from "react";


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

const [nome, setNome] = useState([])
const [nome1, setNome1] = useState([])

useEffect(() => {
  async function getAlunos(db) {
    const alunos = collection(db, 'turmaA');
    const alunosSnapshot = await getDocs(alunos);
    setNome(alunosSnapshot.docs.map(doc => doc.data()))
    
    // nome.forEach((doc) => { //ler os dados de todas coleção
        //   console.log(doc.nome)
        // })
  }
  getAlunos(db)  

},[])


function verAlunos(){

  setNome1(nome.map( (nome, key) => (
        <li key={key}>{nome.nome}</li>
    )))
  
}


// const [endereco, setEndereco] = useState({})

// function manipularEndereco(event){
//   setEndereco({
//     cep: event.target.value
//   })

//   if(endereco.cep && endereco.cep.length === 8){
//     fetch(`https://viacep.com.br/ws/${endereco.cep}/json/`)
//       .then(resposta => resposta.json())
//       .then(dados => {
//         setEndereco({
//           cep: dados.cep,
//           logradouro: dados.logradouro,
//           localidade: dados.localidade
//         })
//       })
//   }
// }

  return (
    <div>
      <button onClick={verAlunos}>ver alunos</button>
        <ul>
          {nome1}
        </ul>
    </div>
  );
}

export default App;
