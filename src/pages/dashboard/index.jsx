import { useState } from "react";
import logo2 from "../../assets/logo2.svg";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { List } from "../../components/List";
import { Summary } from "../../components/Summary";
import { TotalMoney } from "../../components/TotalMoney";
import "./style.css";

export const Dashboard = ({ setInitialPage }) => {
  const [listTransactions, setListTransactions] = useState([]);

  const [filterType, setFilterType] = useState("todos");

  const filterTransactions = listTransactions.filter((transaction) =>
    filterType === "todos" ? true : transaction.type === filterType
  );

  const addTransaction = (newTransaction) => {
    setListTransactions([...listTransactions, newTransaction]);
  };

  const handTransaction = (removeTransaction) => {
    const filtered = listTransactions.filter(
      (transaction) => transaction != removeTransaction
    );
    setListTransactions(filtered);
  };

  return (
    <>
      <Header logo={logo2} setInitialPage={setInitialPage} />
      <main className="dashboard">
        <section>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            addTransaction={addTransaction}
          />
          <TotalMoney listTransactions={listTransactions} />
        </section>
        <section className="summary">
          <Summary filterType={filterType} setFilterType={setFilterType} />
          <List
            listTransactions={filterTransactions}
            handTransaction={handTransaction}
            filterType={filterType}
          />
        </section>
      </main>
    </>
  );
};
