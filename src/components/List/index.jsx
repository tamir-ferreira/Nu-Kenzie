import empty from "../../assets/empty.svg";
import { Card } from "../Card";
import "./style.css";

export const List = ({ listTransactions, handTransaction }) => {
  //   console.log(listTransactions);
  return listTransactions == "" ? (
    <div className="empty-list">
      <h2 className="font-title-2">Você ainda não possui nenhum lançamento</h2>
      <img src={empty} alt="imagem de lista vazia" />
      <img src={empty} alt="imagem de lista vazia" />
      <img src={empty} alt="imagem de lista vazia" />
    </div>
  ) : (
    <ul>
      {listTransactions.map((transaction, index) => {
        return (
          <Card
            key={index}
            transaction={transaction}
            handTransaction={handTransaction}
          />
        );
      })}
    </ul>
  );
};
