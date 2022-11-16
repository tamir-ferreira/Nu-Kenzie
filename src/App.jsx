import { useState } from "react";
import logo from "./assets/logo.svg";
import illustration from "./assets/illustration.svg";
import "./App.css";

function App() {
  const [initial, setInitial] = useState(true);

  return initial ? (
    <div className="App">
      <main className="index">
        <div className="left-container">
          <img src={logo} alt="logotipoo Nu Kenzie" />
          <h2 className="font-title-1">
            Centralize o controle das suas finanças
          </h2>
          <p>de forma rápida e segura</p>
          <button className="button-big" onClick={() => setInitial(false)}>
            Iniciar
          </button>
        </div>
        <img src={illustration} alt="ilustração do aplicativo Nu Kenzie" />
      </main>
    </div>
  ) : (
    <div className="App">
      <main className="home">
        <div>
          <h1>Home</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
