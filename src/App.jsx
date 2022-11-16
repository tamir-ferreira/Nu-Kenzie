import { useState } from "react";
import logo from "./assets/logo.svg";
import logo2 from "./assets/logo2.svg";
import illustration from "./assets/illustration.svg";
import empty from "./assets/empty.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { TotalMoney } from "./components/TotalMoney";
import { Card } from "./components/Card";

export const App = () => {
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
      <Header logo={logo2} setInitial={setInitial} />
      <main className="home">
        <section>
          <Form />
          <TotalMoney />
        </section>
        <section className="summary">
          <div>
            <h3 className="font-title-3">Resumo financeiro</h3>
            <div>
              <button className="button-small button-selected">Todos</button>
              <button className="button-small">Entradas</button>
              <button className="button-small">Despesas</button>
            </div>
          </div>
          <div className="empty-list">
            <h2 className="font-title-2">
              Você ainda não possui nenhum lançamento
            </h2>
            <img src={empty} alt="imagem de lista vazia" />
            <img src={empty} alt="imagem de lista vazia" />
            <img src={empty} alt="imagem de lista vazia" />
          </div>
          <ul>
            <Card />
            <Card />
          </ul>
        </section>
      </main>
    </div>
  );
};
