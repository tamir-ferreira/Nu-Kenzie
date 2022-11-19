import "./style.css";

export const TotalMoney = ({ listTransactions }) => {
  let formatedTotal = "R$ 0,00";
  if (listTransactions != "") {
    const total = listTransactions.reduce((acc, atual) => {
      return acc + atual.value;
    }, 0);
    formatedTotal = total.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }
  return (
    <div className="total-money">
      <div>
        <h3 className="font-title-3">Valor total:</h3>
        <span className="font-title-3">{formatedTotal} </span>
      </div>
      <p className="font-body">O valor se refere ao saldo</p>
    </div>
  );
};
