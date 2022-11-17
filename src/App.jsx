import { useState } from "react";
import logo from "./assets/logo.svg";
import logo2 from "./assets/logo2.svg";
import illustration from "./assets/illustration.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { TotalMoney } from "./components/TotalMoney";
import { Card } from "./components/Card";
import { List } from "./components/List";
import { Summary } from "./components/Summary";

export const App = () => {
  const [initial, setInitial] = useState(true);
  const [listTransactions, setListTransactions] = useState([
    /* { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 }, */
  ]);

  const addTransaction = (newTransaction) => {
    setListTransactions([...listTransactions, newTransaction]);
    // console.log(listTransactions);
  };

  const handTransaction = (removeTransaction) => {
    const filtered = listTransactions.filter(
      (transaction) => transaction != removeTransaction
    );
    setListTransactions(filtered);
  };

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
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            addTransaction={addTransaction}
          />
          <TotalMoney listTransactions={listTransactions} />
        </section>
        <section className="summary">
          <Summary />
          <List
            listTransactions={listTransactions}
            handTransaction={handTransaction}
          />
        </section>
      </main>
    </div>
  );
};
